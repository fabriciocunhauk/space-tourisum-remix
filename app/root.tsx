import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "./components/NavBar/NavBar";

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
