import React from "react";
import GoogleMapReact from "google-map-react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const googleApiKey = process.env.NASA_API_KEY;

  return { googleApiKey };
};

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

type Props = {
  googleApiKey: string;
};

export default function SimpleMap({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) {
  const { googleApiKey } = useLoaderData<Props>();
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 1,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
