import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import HomeLogo from "./components/logos/HomeLogo";

import styles from "./styles/tailwind.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export const meta: MetaFunction = () => {
  const description = "Space Tourism website";
  const keywords = "Space Tourism";

  return {
    keywords,
    description,
  };
};

export default function App() {
  return (
    <Document>
      <Navbar>
        <Outlet />
      </Navbar>
    </Document>
  );
}

const Document = ({ children, title }: any) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
        <title>{title ? title : "Space Tourism"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const Navbar = ({ children }: any) => {
  return (
    <div className="flex align-center justify-center">
      <nav className="w-[80%] h-[100px] m-[0_auto] absolute top-10  bottom-0 left-0 right-0 flex align-center justify-between  bg-transparent">
        <Link to="/" className="flex items-center justify-around">
          <HomeLogo />
        </Link>
        <ul className="flex items-center justify-around text-white  bg-white bg-opacity-5 w-1/2">
          <li className="">
            <Link to="/">00 HOME</Link>
          </li>
          <li>
            <Link to="/destination/moon">01 DESTINATION</Link>
          </li>
          <li>
            <Link to="/crew">02 CREW</Link>
          </li>
          <li>
            <Link to="/technology">03 TECHNOLOGY</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};
