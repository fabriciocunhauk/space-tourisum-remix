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
      <nav className="w-[80%] h-[100px] m-[0_auto] absolute top-10  bottom-0 left-0 right-0 flex items-center justify-between  bg-transparent">
        <Link to="/" className="flex items-center justify-around">
          <HomeLogo />
        </Link>
        {isMobile ? (
          <ul className="flex items-center justify-around text-white  bg-white bg-opacity-5 w-1/2 h-[100px]">
            <li className="">
              <Link to="/">00 HOME</Link>
            </li>
            <li>
              <Link to="/destination">01 DESTINATION</Link>
            </li>
            <li>
              <Link to="/crew">02 CREW</Link>
            </li>
            <li>
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
