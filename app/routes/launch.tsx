import LayoutContainer from "~/components/layout-container/LayoutContainer";
import background from "../../public/assets/launch/background-technology-desktop.jpg";
import { Navbar } from "~/components/navbar/Navbar";
import Container from "~/components/Container/Container";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Button from "~/components/Button/Button";

export const loader: LoaderFunction = async () => {
  const res = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/");

  const upcomingLaunches = await res.json();

  return { upcomingLaunches };
};

type LoaderProps = {
  name: string;
  net: string;
  image: string;
  last_updated: string;
  launch_date_local: number;
  window_start: number;
  window_end: number;
  launch_service_provider: {
    name: string;
    type: string;
    url: string;
  };
  mission: {
    description?: string;
    id: number;
    launch_designator: string;
    launch_library_id: number;
    name: string;
    orbit: {
      abbreviation: string;
      id: number;
      name: string;
      reference_system: string;
    };
    type: string;
  };
  pad: {
    map_image: string;
    url: string;
    location: {
      country_code: string;
      map_image: string;
      url: string;
      name: string;
    };
  };
  rocket: {
    configuration: {
      family: string;
      full_name: string;
      id: number;
      name: string;
      url: string;
      variant: string;
    };
  };
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
};

export default function Launch() {
  const { upcomingLaunches } = useLoaderData();
  console.log(upcomingLaunches.results);

  return (
    <LayoutContainer image={background} className="text-white">
      <Navbar />
      <Container>
        <div className="flex flex-col mt-20">
          <h1 className="text-[20px] font-light lg:text-[28px] mb-20">
            03 SPACE LAUNCHES {upcomingLaunches.results.length}
          </h1>
          <div className="flex items-center">
            <div className="flex flex-col gap-4">
              {upcomingLaunches.results.map(
                ({ name }: LoaderProps, index: number) => {
                  return (
                    <Button
                      key={index}
                      classes={{
                        button:
                          "text-base bg-white text-black hover:text-white hover:bg-transparent",
                      }}
                    >
                      {index + 1}
                    </Button>
                  );
                }
              )}
            </div>
            <div className="flex flex-col m-auto max-w-[370px] divide-y divide-solid">
              <h1 className="text-[20px] font-light text-center lg:text-[28px]">
                MISSION
              </h1>
              {upcomingLaunches.results.map(
                (
                  { name, rocket, pad, last_updated }: LoaderProps,
                  idex: number
                ) => {
                  return (
                    <ul key={idex} className="py-2">
                      <li>NAME: {name}</li>
                      <li>ROCKET NAME: {rocket.configuration.name}</li>
                      <li>LOCATION: {pad.location.name}</li>
                      <li>DATE: {last_updated}</li>
                    </ul>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto max-w-[370px] divide-y divide-solid">
          <h1 className="text-[20px] font-light text-center lg:text-[28px]">
            DETAILS
          </h1>
          {upcomingLaunches.results.map(
            ({ mission }: LoaderProps, idex: number) => {
              return (
                <ul key={idex} className="py-2">
                  <li>{mission?.description}</li>
                </ul>
              );
            }
          )}
        </div>
      </Container>
    </LayoutContainer>
  );
}
