import React, { Fragment, useEffect, useState } from "react";
import backgroundMobile from "../../../public/assets/destination/background-destination-mobile.jpg";
import backgroundDesktop from "../../../public/assets/destination/background-destination-desktop.jpg";
import LayoutContainer from "~/components/layout-container/LayoutContainer";
import { Navbar } from "~/components/navbar/Navbar";
import mars from "../../../public/assets/destination/image-mars.png";
import moon from "../../../public/assets/destination/image-moon.png";
import titan from "../../../public/assets/destination/image-titan.png";
import europa from "../../../public/assets/destination/image-europa.png";
import { useWindowDimensions } from "~/hooks/useWindowDimension";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Container from "~/components/Container/Container";

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://api.le-systeme-solaire.net/rest/bodies/lune"
  );

  const planet = await res.json();

  const planetsData: any = [
    {
      id: 1,
      image: moon,
      name: "moon",
      caption:
        "Facts About The Moon The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. The Moon's presence helps stabilize our planet's wobble and moderate our climate. The Moon's distance from Earth is about 240,000 miles (385,000km). The Moon has a very thin atmosphere called an exosphere.",
      distance: "384,400 km",
      travel_time: "3 days",
    },
    {
      id: 2,
      image: mars,
      name: "mars",
      caption:
        "Mars tugs at the human imagination like no other planet. With a force mightier than gravity, it attracts the eye to the shimmering red presence in the clear night sky.” “I think humans will reach Mars, and I would like to see it happen in my lifetime.",
      distance: "225 MIL. km",
      travel_time: "9 months",
    },
    {
      id: 3,
      image: europa,
      name: "europa",
      caption:
        "Structure. Like our planet, Europa is thought to have an iron core, a rocky mantle, and an ocean of salty water. Unlike Earth, however, Europa's ocean lies below a shell of ice probably 10 to 15 miles (15 to 25 kilometers) thick, and has an estimated depth of 40 to 100 miles (60 to 150 kilometers).",
      distance: "628 MIL. km",
      travel_time: "3 years",
    },
    {
      id: 4,
      image: titan,
      name: "titan",
      caption:
        "Titan is bigger than Earth's moon, and larger than even the planet Mercury. This mammoth moon is the only moon in the solar system with a dense atmosphere, and it's the only world besides Earth that has standing bodies of liquid, including rivers, lakes and seas, on its surface.",
      distance: "1.6 BIL. km",
      travel_time: "7 years",
    },
  ];

  return { planet, planetsData };
};

export default function DestinationIndex() {
  const [planetId, setPlanetId] = useState(1);
  const { width } = useWindowDimensions();

  const { planet, planetsData } = useLoaderData();

  console.log({ planet, planetsData });

  const sm = 640;

  const handleSelection = (planetId: number) => {
    setPlanetId(planetId);
  };

  useEffect(() => {
    setPlanetId(planetId);
  }, [planetId]);

  return (
    <LayoutContainer
      image={width > sm ? backgroundDesktop : backgroundMobile}
      className="text-white w-screen"
    >
      <Navbar />
      <Container>
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-[20px] font-light font-Barlow md:place-self-start md:pl-10 lg:pl-28 lg:text-[28px]">
            01 PICK YOUR DESTINATION
          </h1>
          {planetsData.map((planet: { image: string; id: number }) => {
            if (planet.id === planetId) {
              return (
                <img
                  className="w-[300px] h-[300px] mt-10 lg:w-[445px] lg:h-[445px] lg:mb-16"
                  key={planet.id}
                  src={planet.image}
                  alt="planet"
                />
              );
            }
            return null;
          })}
        </div>
        <div className="place-items-center sm:p-28">
          <div className="grid grid-cols-1 place-content-center p-5 md:w-[573px] lg:h-[472px] lg:w-[444px]">
            <ul className="flex justify-around items-center place-self-center m-auto sm:m-0 gap-4 w-[237.5px] sm:w-[330px] lg:place-self-start">
              {planetsData.map((planet: { id: number; name: string }) => {
                return (
                  <li
                    key={planet.id}
                    className="hover:border-b-2 h-10 text-base"
                  >
                    <button onClick={() => handleSelection(planet.id)}>
                      {planet.name.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="py-5 text-center lg:text-left h-72">
              {planetsData.map(
                (planet: { id: number; name: string; caption: string }) =>
                  planetId === planet.id ? (
                    <Fragment key={planet.id}>
                      <h2 className="text-[56px] font-Bellefair md:text-[80px] lg:text-8xl">
                        {planet.name.toUpperCase()}
                      </h2>
                      <p className="text-center lg:text-left font-Barlow">
                        {planet.caption}
                      </p>
                    </Fragment>
                  ) : null
              )}
            </div>
            <hr className="opacity-20 p-3 md:w-[535px]  lg:w-[410px]" />
            <div className="grid grid-cols-2 text-center md:w-[535px] lg:w-[444px] lg:grid-cols-2">
              {planetsData.map(
                (travelDetails: {
                  id: number;
                  distance: string;
                  travel_time: string;
                }) => {
                  if (travelDetails.id === planetId) {
                    return (
                      <Fragment key={travelDetails.id}>
                        <div className="lg:place-self-start">
                          <h2 className="font-Barlow text-lg text text-secondary">
                            VOLUME
                          </h2>
                          <span className="text-[28px] font-Bellefair">
                            {planet.vol.volValue}
                          </span>
                        </div>
                        <div className="lg:place-self-start">
                          <h2 className="font-Barlow text-lg text text-secondary">
                            GRAVITY
                          </h2>
                          <span className="text-[28px] font-Bellefair">
                            {planet.gravity}
                          </span>
                        </div>
                      </Fragment>
                    );
                  }
                  return null;
                }
              )}
            </div>
          </div>
        </div>
      </Container>
    </LayoutContainer>
  );
}
