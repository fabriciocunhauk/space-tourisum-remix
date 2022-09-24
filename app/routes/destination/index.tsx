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

type Planets = {
  id: number;
  image: string;
  name: string;
  link: string;
  caption: string;
};

export default function DestinationIndex() {
  const [planetId, setPlanetId] = useState(1);
  const { width } = useWindowDimensions();

  const sm = 640;

  const planetsData: any = [
    {
      id: 1,
      image: moon,
      name: "moon",
      caption:
        "Facts About The Moon The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. The Moon's presence helps stabilize our planet's wobble and moderate our climate. The Moon's distance from Earth is about 240,000 miles (385,000km). The Moon has a very thin atmosphere called an exosphere.",
    },
    {
      id: 2,
      image: mars,
      name: "mars",
      caption:
        "Mars tugs at the human imagination like no other planet. With a force mightier than gravity, it attracts the eye to the shimmering red presence in the clear night sky.” “I think humans will reach Mars, and I would like to see it happen in my lifetime.",
    },
    {
      id: 3,
      image: europa,
      name: "europa",
      caption:
        "Structure. Like our planet, Europa is thought to have an iron core, a rocky mantle, and an ocean of salty water. Unlike Earth, however, Europa's ocean lies below a shell of ice probably 10 to 15 miles (15 to 25 kilometers) thick, and has an estimated depth of 40 to 100 miles (60 to 150 kilometers).",
    },
    {
      id: 4,
      image: titan,
      name: "titan",
      caption:
        "Titan is bigger than Earth's moon, and larger than even the planet Mercury. This mammoth moon is the only moon in the solar system with a dense atmosphere, and it's the only world besides Earth that has standing bodies of liquid, including rivers, lakes and seas, on its surface.",
    },
  ];

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
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-36">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-[20px] font-light md:place-self-start lg:pl-28 lg:text-[28px]">
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
              {planetsData.map((planet: { id: number; name: string }) => (
                <li
                  key={planet.id}
                  className="hover:border-b-[3px] h-10 text-base"
                >
                  <button onClick={() => handleSelection(planet.id)}>
                    {planet.name.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
            <div className="py-5 text-center lg:text-left h-72">
              {planetsData.map(
                (planet: { id: number; name: string; caption: string }) => {
                  if (planet.id === planetId) {
                    return (
                      <Fragment key={planet.id}>
                        <h2 className="text-[56px] font-Bellefair md:text-[80px] lg:text-8xl">
                          {planet.name.toUpperCase()}
                        </h2>
                        <p className="text-center lg:text-left font-Barlow">
                          {planet.caption}
                        </p>
                      </Fragment>
                    );
                  }
                  return null;
                }
              )}
            </div>
            <hr className="opacity-20 p-3 max-w-[444px]" />
            <div className="grid grid-cols-2 lg:grid-cols-2 text-center max-w-[444px]">
              <div className="lg:place-self-start">
                <h2 className="font-Barlow text-lg text text-secondary">
                  AVG. DISTANCE
                </h2>
                <span className="text-[28px] font-Bellefair">384,400 KM</span>
              </div>
              <div className="lg:place-self-start">
                <h2 className="font-Barlow text-lg text text-secondary">
                  EST. TRAVEL TIME
                </h2>
                <span className="text-[28px] font-Bellefair">3 DAYS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}
