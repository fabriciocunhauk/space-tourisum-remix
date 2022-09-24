import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import HomeLogo from "../logos/HomeLogo";
import { useWindowDimensions } from "~/hooks/useWindowDimension";
import NavbarBurger from "../../icons/NavbarBurger";

export const Navbar = ({ children }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 507) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="flex align-center justify-center min-w-screen min-h-screen">
      <nav className="w-[90%] h-[100px] m-[0_auto] absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between bg-transparent md:w-screen lg:w-[90%] lg:top-10">
        <Link
          to="/"
          className="flex items-center justify-around sm:ml-10 lg:ml-0"
        >
          <HomeLogo />
        </Link>
        {isMobile ? (
          <ul className="flex items-center justify-around text-white pt-4 bg-white bg-opacity-5 w-1/2 h-[100px]">
            <li className="border-primary hover:border-b-2 h-10 cursor:pointer">
              <Link to="/">00 HOME</Link>
            </li>
            <li className="border-primary hover:border-b-2 h-10 cursor:pointer">
              <Link to="/destination">01 DESTINATION</Link>
            </li>
            <li className="border-primary hover:border-b-2 h-10 cursor:pointer">
              <Link to="/crew">02 CREW</Link>
            </li>
            <li className="border-primary hover:border-b-2 h-10 cursor:pointer">
              <Link to="/technology">03 TECHNOLOGY</Link>
            </li>
          </ul>
        ) : (
          <div className="flex items-center justify-center cursor-pointer">
            <NavbarBurger />
          </div>
        )}
      </nav>
      <div>{children}</div>
    </div>
  );
};
