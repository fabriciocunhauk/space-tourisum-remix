import LayoutContainer from "~/components/LayoutContainer/LayoutContainer";
import background from "../../public/assets/destination/background-destination-desktop.jpg";
import { Link, Outlet } from "@remix-run/react";

const destination = () => {
  return (
    <LayoutContainer image={background}>
      <div className="h-1/2 flex justify-around w-screen mt-40">
        <Outlet />
        <div className="text-primary ">
          <ul className="flex items-center justify-around w-96">
            <li>
              <Link to="/destination/moon">MOON</Link>
            </li>
            <li>
              <Link to="/destination/mars">MARS</Link>
            </li>
            <li>
              <Link to="/destination/europa">EUROPA</Link>
            </li>
            <li>
              <Link to="/destination/titan">TITAN</Link>
            </li>
          </ul>

          <h1 className="text-8xl font-Bellefair leading-normal">MOON</h1>
          <p className="text-secondary text-left font-Barlow w-96 leading-6">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default destination;
