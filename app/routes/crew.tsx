import LayoutContainer from "~/components/layout-container/LayoutContainer";
import { Navbar } from "~/components/navbar/Navbar";
import background from "../../public/assets/crew/background-crew-desktop.jpg";
import douglas from "../../public/assets/crew/image-douglas-hurley.png";
import mark from "../../public/assets/crew/image-mark-shuttleworth.png";
import victor from "../../public/assets/crew/image-victor-glover.png";
import anousheh from "../../public/assets/crew/image-anousheh-ansari.png";
import { Fragment, useEffect, useState } from "react";
import Dot from "~/icons/Dot";

const crewData = [
  {
    id: 1,
    image: douglas,
    crew_title: "COMMANDER",
    name: "DOUGLAS HURLEY",
    body: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 2,
    image: mark,
    crew_title: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    body: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 3,
    image: victor,
    crew_title: "PILOT",
    name: "VICTOR GLOVER",
    body: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    id: 4,
    image: anousheh,
    crew_title: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    body: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

export default function Crew() {
  const [crewId, setCrewId] = useState(1);

  const handleSelection = (crewId: number) => {
    setCrewId(crewId);
  };

  useEffect(() => {
    setCrewId(crewId);
  }, [crewId]);
  return (
    <LayoutContainer image={background} className="text-white">
      <Navbar />
      <div className="grid grid-cols-1 w-screen">
        <div className="grid grid-cols-1 p-5">
          <h1 className="text-[20px] font-light text-center md:place-self-start text-white md:pl-10 lg:pl-28 lg:text-[28px]">
            02 MEET YOUR CREW
          </h1>
          {crewData.map((crew: { image: string; id: number }) => {
            if (crew.id === crewId) {
              return (
                <Fragment key={crew.id}>
                  <img
                    className="w-[177.12px] h-[222px] mt-10 lg:w-[445px] lg:h-[445px] lg:mb-16 place-self-center "
                    key={crew.id}
                    src={crew.image}
                    alt="crew member"
                  />
                  <hr className="opacity-20 md:w-[535px]  lg:w-[410px]" />
                </Fragment>
              );
            }
            return null;
          })}
        </div>
        <div>
          <ul className="flex justify-around items-center place-self-center m-auto sm:m-0 gap-4 w-[237.5px] sm:w-[330px] lg:place-self-start">
            {crewData.map((planet: { id: number; name: string }) => (
              <li key={planet.id}>
                <button
                  className="hover:ring-2 ring-white rounded-full p-1 text-base"
                  onClick={() => handleSelection(planet.id)}
                >
                  <Dot />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LayoutContainer>
  );
}
