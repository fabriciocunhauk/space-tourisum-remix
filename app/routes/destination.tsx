import LayoutContainer from "~/components/LayoutContainer/LayoutContainer";
import background from "../../public/assets/destination/background-destination-desktop.jpg";
import { Link, Outlet } from "@remix-run/react";
import { planetsData } from "../../planetsData";

const destination = () => {
  return (
    <LayoutContainer image={background}>
      <div className="w-screen h-1/2 flex flex-wrap justify-around  p-4">
        <Outlet />
        <div className="mt-10 text-primary ">
          <ul className="flex items-center justify-around w-96 h-10 first:ml-[-8px]">
            {planetsData.map((planet) => {
              const { name, link } = planet;

              return (
                <li
                  key={planet.id}
                  className="hover:border-b-2 border-white h-10"
                >
                  <Link to={link}>{name.toUpperCase()}</Link>
                </li>
              );
            })}
          </ul>
          {planetsData.map((planetBody) => {
            const { id, name, caption } = planetBody;

            return (
              <div key={id}>
                <h1 className="text-8xl font-Bellefair leading-normal pl-2">
                  {name.toUpperCase()}
                </h1>
                <p className="text-secondary text-left font-Barlow w-96 leading-6 p-4">
                  {caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutContainer>
  );
};

export default destination;
