import LayoutContainer from "~/components/layout-container/LayoutContainer";
import background from "../../public/assets/crew/background-crew-desktop.jpg";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Container from "~/components/Container/Container";
import Card from "~/components/Card/Card";
import SimpleMap from "~/components/GoogleMaps";

export const loader: LoaderFunction = async () => {
  const dataNumberOfPeopleInSpace = await fetch(
    "http://api.open-notify.org/astros.json"
  );
  const dataISScurrentLocation = await fetch(
    "http://api.open-notify.org/iss-now.json"
  );

  const numberOfPeopleInSpace = await dataNumberOfPeopleInSpace.json();

  const { iss_position: ISScurrentLocation } =
    await dataISScurrentLocation.json();

  const { longitude, latitude } = ISScurrentLocation;

  const numberOfPeople = numberOfPeopleInSpace.number;
  const people = numberOfPeopleInSpace.people;

  return json({
    numberOfPeople,
    people,
    longitude,
    latitude,
  });
};

// const crewData = [
//   {
//     id: 1,
//     image: douglas,
//     crew_title: "COMMANDER",
//     name: "DOUGLAS HURLEY",
//     body: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
//   },
//   {
//     id: 2,
//     image: mark,
//     crew_title: "MISSION SPECIALIST",
//     name: "MARK SHUTTLEWORTH",
//     body: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
//   },
//   {
//     id: 3,
//     image: victor,
//     crew_title: "PILOT",
//     name: "VICTOR GLOVER",
//     body: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
//   },
//   {
//     id: 4,
//     image: anousheh,
//     crew_title: "FLIGHT ENGINEER",
//     name: "ANOUSHEH ANSARI",
//     body: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
//   },
// ];
type PeopleProps = {
  craft: string;
  name: string;
}[];

type LoaderProps = {
  numberOfPeople: number;
  people: PeopleProps;
  longitude: string;
  latitude: string;
};

export default function Crew() {
  const { numberOfPeople, people, longitude, latitude } =
    useLoaderData<LoaderProps>();
  console.log({ numberOfPeople, people, longitude, latitude });

  return (
    <LayoutContainer image={background} classes={{ root: "text-white" }}>
      <Container
        classes={{
          container: "p-5 w-screen",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[20px] font-light lg:text-[28px]">
            NUMBER OF PEOPLE IN SPACE
          </h1>

          <span className="text-[250px]">{numberOfPeople}</span>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[20px] font-light text-center lg:text-[28px]">
            02 MEET YOUR CREW
          </h1>
          {people.map(({ craft, name }, index) => {
            return (
              <Card key={index} classes={{ card: "py-2" }}>
                <p>CRAFT: {craft}</p>
                <p>CREW MEMBER: {name}</p>
              </Card>
            );
          })}
        </div>
      </Container>
      <SimpleMap longitude={Number(longitude)} latitude={Number(latitude)} />
    </LayoutContainer>
  );
}
