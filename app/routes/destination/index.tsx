import React, { useEffect, useState } from "react";
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
  const md = 768;
  const lg = 1024;

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
      className="text-white"
    >
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-36">
        <div className="grid grid-cols-1 place-items-center">
          <h1>01 PICK YOUR DESTINATION</h1>
          {planetsData.map((planet: { image: string; id: number }) => {
            if (planet.id === planetId) {
              return (
                <img
                  className="w-[170px] sm:w-[300px] m-5"
                  key={planet.id}
                  src={planet.image}
                  alt="planet"
                />
              );
            }
            return null;
          })}
        </div>
        <div className="grid grid-cols-1 place-items-center">
          <ul className="flex justify-around gap-4 w-10/12">
            {planetsData.map((planet: { id: number; name: string }) => (
              <li key={planet.id}>
                <button onClick={() => handleSelection(planet.id)}>
                  {planet.name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
          {planetsData.map(
            (planet: { id: number; name: string; caption: string }) => {
              if (planet.id === planetId) {
                return (
                  <div className="p-5 text-center">
                    <h2 className="text-[56px] font-Bellefair">
                      {planet.name.toUpperCase()}
                    </h2>
                    <p className="text-center font-Barlow">{planet.caption}</p>
                  </div>
                );
              }
              return null;
            }
          )}
        </div>
        <hr />
        <div className="text-center">
          <h2>AVG. DISTANCE</h2>
          <span>384,400 KM</span>

          <h2>EST. TRAVEL TIME</h2>
          <span>3 DAYS</span>
        </div>
      </div>
    </LayoutContainer>
  );
}
