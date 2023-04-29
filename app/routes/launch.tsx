import LayoutContainer from "~/components/layout-container/LayoutContainer";
import background from "../../public/assets/launch/background-technology-desktop.jpg";
import { Navbar } from "~/components/navbar/Navbar";
import Container from "~/components/Container/Container";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Card from "~/components/Card/Card";

export const loader: LoaderFunction = async () => {
  // const res = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/");

  const res = [
    {
      id: "0705d82e-11b4-4e78-9075-457987f9f32f",
      url: "https://ll.thespacedevs.com/2.2.0/launch/0705d82e-11b4-4e78-9075-457987f9f32f/",
      slug: "falcon-9-block-5-sda-tranche-0a",
      name: "Falcon 9 Block 5 | SDA Tranche 0A",
      status: {
        id: 3,
        name: "Launch Successful",
        abbrev: "Success",
        description:
          "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
      },
      last_updated: "2023-04-02T16:33:37Z",
      net: "2023-04-02T14:29:00Z",
      window_end: "2023-04-02T14:29:00Z",
      window_start: "2023-04-02T14:29:00Z",
      probability: 90,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 121,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        name: "SpaceX",
        type: "Commercial",
      },
      rocket: {
        id: 7558,
        configuration: {
          id: 164,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
          name: "Falcon 9",
          family: "Falcon",
          full_name: "Falcon 9 Block 5",
          variant: "Block 5",
        },
      },
      mission: {
        id: 6166,
        name: "SDA Tranche 0A",
        description:
          "First mission launched by the Space Development Agency for the Tranche 0 Transport Layer.",
        launch_designator: null,
        type: "Government/Top Secret",
        orbit: {
          id: 13,
          name: "Polar Orbit",
          abbrev: "PO",
        },
      },
      pad: {
        id: 16,
        url: "https://ll.thespacedevs.com/2.2.0/pad/16/",
        agency_id: null,
        name: "Space Launch Complex 4E",
        info_url: null,
        wiki_url: "",
        map_url: "http://maps.google.com/maps?q=34.632+N,+120.611+W",
        latitude: "34.632",
        longitude: "-120.611",
        location: {
          id: 11,
          url: "https://ll.thespacedevs.com/2.2.0/location/11/",
          name: "Vandenberg SFB, CA, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
          total_launch_count: 715,
          total_landing_count: 9,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg",
        total_launch_count: 106,
        orbital_launch_attempt_count: 106,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230330080629.jpeg",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6410,
      location_launch_attempt_count: 715,
      pad_launch_attempt_count: 106,
      agency_launch_attempt_count: 235,
      orbital_launch_attempt_count_year: 54,
      location_launch_attempt_count_year: 6,
      pad_launch_attempt_count_year: 6,
      agency_launch_attempt_count_year: 22,
    },
    {
      id: "c67f0f61-3a4b-4adb-af2b-3c02a1ff6055",
      url: "https://ll.thespacedevs.com/2.2.0/launch/c67f0f61-3a4b-4adb-af2b-3c02a1ff6055/",
      slug: "hyperbola-1-unknown-payload",
      name: "Hyperbola-1 | Unknown Payload",
      status: {
        id: 1,
        name: "Go for Launch",
        abbrev: "Go",
        description: "Current T-0 confirmed by official or reliable sources.",
      },
      last_updated: "2023-04-02T04:39:01Z",
      net: "2023-04-05T04:10:00Z",
      window_end: "2023-04-05T06:25:00Z",
      window_start: "2023-04-05T03:54:00Z",
      probability: null,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 274,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/274/",
        name: "iSpace",
        type: "Commercial",
      },
      rocket: {
        id: 7833,
        configuration: {
          id: 193,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/193/",
          name: "Hyperbola-1",
          family: "Hyperbola",
          full_name: "Hyperbola-1",
          variant: "1",
        },
      },
      mission: null,
      pad: {
        id: 142,
        url: "https://ll.thespacedevs.com/2.2.0/pad/142/",
        agency_id: null,
        name: "Unknown Pad",
        info_url: null,
        wiki_url:
          "https://en.wikipedia.org/wiki/Jiuquan_Satellite_Launch_Center",
        map_url: "http://maps.google.com/maps?q=40.9605556,100.2961393",
        latitude: "40.9605556",
        longitude: "100.2961393",
        location: {
          id: 17,
          url: "https://ll.thespacedevs.com/2.2.0/location/17/",
          name: "Jiuquan, People's Republic of China",
          country_code: "CHN",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_17_20200803142429.jpg",
          total_launch_count: 189,
          total_landing_count: 0,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_142_20200803143244.jpg",
        total_launch_count: 11,
        orbital_launch_attempt_count: 11,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/hyperbola-1_image_20190724014013.jpg",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6412,
      location_launch_attempt_count: 191,
      pad_launch_attempt_count: 13,
      agency_launch_attempt_count: 5,
      orbital_launch_attempt_count_year: 6412,
      location_launch_attempt_count_year: 10,
      pad_launch_attempt_count_year: 5,
      agency_launch_attempt_count_year: 1,
    },
    {
      id: "89931acb-0ffe-42b6-8f59-e339d17a1d77",
      url: "https://ll.thespacedevs.com/2.2.0/launch/89931acb-0ffe-42b6-8f59-e339d17a1d77/",
      slug: "falcon-9-block-5-intelsat-40e",
      name: "Falcon 9 Block 5 | Intelsat 40e",
      status: {
        id: 8,
        name: "To Be Confirmed",
        abbrev: "TBC",
        description:
          "Awaiting official confirmation - current date is known with some certainty.",
      },
      last_updated: "2023-04-02T05:46:01Z",
      net: "2023-04-07T04:29:00Z",
      window_end: "2023-04-07T07:17:00Z",
      window_start: "2023-04-07T04:29:00Z",
      probability: -1,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 121,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        name: "SpaceX",
        type: "Commercial",
      },
      rocket: {
        id: 2695,
        configuration: {
          id: 164,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
          name: "Falcon 9",
          family: "Falcon",
          full_name: "Falcon 9 Block 5",
          variant: "Block 5",
        },
      },
      mission: {
        id: 6305,
        name: "Intelsat 40e",
        description:
          "Intelsat 40e is an advanced geostationary satellite that will provide Intelsat’s government and enterprise customers across North and Central America with high-throughput, “coast-to-coast” services. The satellite’s capabilities will support the growing number of customers that depend on Intelsat’s managed services and solutions to easily integrate satellite into their overall networking and communications strategies.\r\n\r\nHosted on the Intelsat 40e satellite is NASA’s Tropospheric Emissions: Monitoring of Pollution (TEMPO), an Earth science instrument that will observe air pollution over North America in unprecedented detail.",
        launch_designator: null,
        type: "Communications",
        orbit: {
          id: 2,
          name: "Geostationary Transfer Orbit",
          abbrev: "GTO",
        },
      },
      pad: {
        id: 80,
        url: "https://ll.thespacedevs.com/2.2.0/pad/80/",
        agency_id: 121,
        name: "Space Launch Complex 40",
        info_url: null,
        wiki_url:
          "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
        map_url: "http://maps.google.com/maps?q=28.56194122,-80.57735736",
        latitude: "28.56194122",
        longitude: "-80.57735736",
        location: {
          id: 12,
          url: "https://ll.thespacedevs.com/2.2.0/location/12/",
          name: "Cape Canaveral, FL, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
          total_launch_count: 881,
          total_landing_count: 33,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
        total_launch_count: 175,
        orbital_launch_attempt_count: 174,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6412,
      location_launch_attempt_count: 882,
      pad_launch_attempt_count: 176,
      agency_launch_attempt_count: 236,
      orbital_launch_attempt_count_year: 56,
      location_launch_attempt_count_year: 14,
      pad_launch_attempt_count_year: 13,
      agency_launch_attempt_count_year: 23,
    },
    {
      id: "4066e51e-93ce-46f7-9806-9d2d712107a6",
      url: "https://ll.thespacedevs.com/2.2.0/launch/4066e51e-93ce-46f7-9806-9d2d712107a6/",
      slug: "ariane-5-eca-juice-jupiter-icy-moons-explorer",
      name: "Ariane 5 ECA+ | JUICE (JUpiter ICy moons Explorer)",
      status: {
        id: 1,
        name: "Go for Launch",
        abbrev: "Go",
        description: "Current T-0 confirmed by official or reliable sources.",
      },
      last_updated: "2023-03-29T19:03:14Z",
      net: "2023-04-13T12:15:01Z",
      window_end: "2023-04-13T12:15:01Z",
      window_start: "2023-04-13T12:15:01Z",
      probability: -1,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 115,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/115/",
        name: "Arianespace",
        type: "Commercial",
      },
      rocket: {
        id: 2659,
        configuration: {
          id: 215,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/215/",
          name: "Ariane 5 ECA+",
          family: "Ariane 5",
          full_name: "Ariane 5 ECA+",
          variant: "ECA+",
        },
      },
      mission: {
        id: 660,
        name: "JUICE (JUpiter ICy moons Explorer)",
        description:
          "JUICE is an ESA mission to study some of the Jupiter's moons: Ganymede, Callisto and Europa.",
        launch_designator: null,
        type: "Planetary Science",
        orbit: {
          id: 6,
          name: "Heliocentric N/A",
          abbrev: "Helio-N/A",
        },
      },
      pad: {
        id: 77,
        url: "https://ll.thespacedevs.com/2.2.0/pad/77/",
        agency_id: null,
        name: "Ariane Launch Area 3",
        info_url: null,
        wiki_url: "http://en.wikipedia.org/wiki/ELA-3",
        map_url: "https://www.google.com/maps/?q=5.239,-52.769",
        latitude: "5.239",
        longitude: "-52.768",
        location: {
          id: 13,
          url: "https://ll.thespacedevs.com/2.2.0/location/13/",
          name: "Kourou, French Guiana",
          country_code: "GUF",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_13_20200803142412.jpg",
          total_launch_count: 317,
          total_landing_count: 0,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_77_20200803143458.jpg",
        total_launch_count: 116,
        orbital_launch_attempt_count: 116,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/ariane_5_eca25_image_20200220090552.jpeg",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6415,
      location_launch_attempt_count: 318,
      pad_launch_attempt_count: 117,
      agency_launch_attempt_count: 313,
      orbital_launch_attempt_count_year: 59,
      location_launch_attempt_count_year: 1,
      pad_launch_attempt_count_year: 1,
      agency_launch_attempt_count_year: 1,
    },
    {
      id: "8b1067dd-81c6-4bc3-b0f1-45f78963716f",
      url: "https://ll.thespacedevs.com/2.2.0/launch/8b1067dd-81c6-4bc3-b0f1-45f78963716f/",
      slug: "falcon-heavy-viasat-3-americas",
      name: "Falcon Heavy | ViaSat-3 Americas",
      status: {
        id: 8,
        name: "To Be Confirmed",
        abbrev: "TBC",
        description:
          "Awaiting official confirmation - current date is known with some certainty.",
      },
      last_updated: "2023-03-28T15:30:25Z",
      net: "2023-04-18T23:36:00Z",
      window_end: "2023-04-18T23:36:00Z",
      window_start: "2023-04-18T23:36:00Z",
      probability: -1,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 121,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        name: "SpaceX",
        type: "Commercial",
      },
      rocket: {
        id: 2142,
        configuration: {
          id: 161,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/161/",
          name: "Falcon Heavy",
          family: "Falcon",
          full_name: "Falcon Heavy",
          variant: "Heavy",
        },
      },
      mission: {
        id: 699,
        name: "ViaSat-3 Americas",
        description:
          "The ViaSat-3 is a series of three Ka-band satellites is expected to provide vastly superior capabilities in terms of service speed and flexibility for a satellite platform. Each ViaSat-3 class satellite is expected to deliver more than 1-Terabit per second of network capacity, and to leverage high levels of flexibility to dynamically direct capacity to where customers are located.",
        launch_designator: null,
        type: "Communications",
        orbit: {
          id: 2,
          name: "Geostationary Transfer Orbit",
          abbrev: "GTO",
        },
      },
      pad: {
        id: 87,
        url: "https://ll.thespacedevs.com/2.2.0/pad/87/",
        agency_id: null,
        name: "Launch Complex 39A",
        info_url: null,
        wiki_url:
          "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
        map_url: "http://maps.google.com/maps?q=28.608+N,+80.604+W",
        latitude: "28.60822681",
        longitude: "-80.60428186",
        location: {
          id: 27,
          url: "https://ll.thespacedevs.com/2.2.0/location/27/",
          name: "Kennedy Space Center, FL, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_27_20200803142447.jpg",
          total_launch_count: 217,
          total_landing_count: 0,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg",
        total_launch_count: 159,
        orbital_launch_attempt_count: 157,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_heavy_image_20220129192819.jpeg",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6415,
      location_launch_attempt_count: 218,
      pad_launch_attempt_count: 160,
      agency_launch_attempt_count: 238,
      orbital_launch_attempt_count_year: 59,
      location_launch_attempt_count_year: 5,
      pad_launch_attempt_count_year: 5,
      agency_launch_attempt_count_year: 25,
    },
    {
      id: "8cfa00a5-a72e-48b7-80bd-944664688f59",
      url: "https://ll.thespacedevs.com/2.2.0/launch/8cfa00a5-a72e-48b7-80bd-944664688f59/",
      slug: "delta-iv-heavy-nrol-68",
      name: "Delta IV Heavy | NROL-68",
      status: {
        id: 2,
        name: "To Be Determined",
        abbrev: "TBD",
        description:
          "Current date is a placeholder or rough estimation based on unreliable or interpreted sources.",
      },
      last_updated: "2023-03-21T20:26:08Z",
      net: "2023-04-20T00:00:00Z",
      window_end: "2023-04-20T00:00:00Z",
      window_start: "2023-04-20T00:00:00Z",
      probability: -1,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 124,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/124/",
        name: "United Launch Alliance",
        type: "Commercial",
      },
      rocket: {
        id: 2533,
        configuration: {
          id: 21,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/21/",
          name: "Delta IV Heavy",
          family: "Delta",
          full_name: "Delta IV Heavy",
          variant: "Heavy",
        },
      },
      mission: {
        id: 6167,
        name: "NROL-68",
        description:
          "Classified payload for the National Reconnaissance Office.",
        launch_designator: null,
        type: "Government/Top Secret",
        orbit: {
          id: 25,
          name: "Unknown",
          abbrev: "N/A",
        },
      },
      pad: {
        id: 38,
        url: "https://ll.thespacedevs.com/2.2.0/pad/38/",
        agency_id: null,
        name: "Space Launch Complex 37B",
        info_url: null,
        wiki_url:
          "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_37",
        map_url: "http://maps.google.com/maps?q=28.531700,-80.564950",
        latitude: "28.5317",
        longitude: "-80.56495",
        location: {
          id: 12,
          url: "https://ll.thespacedevs.com/2.2.0/location/12/",
          name: "Cape Canaveral, FL, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
          total_launch_count: 881,
          total_landing_count: 33,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_38_20200803143515.jpg",
        total_launch_count: 38,
        orbital_launch_attempt_count: 38,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/delta_iv_heavy_image_20210426103838.jpg",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6411,
      location_launch_attempt_count: 883,
      pad_launch_attempt_count: 39,
      agency_launch_attempt_count: 157,
      orbital_launch_attempt_count_year: 55,
      location_launch_attempt_count_year: 15,
      pad_launch_attempt_count_year: 1,
      agency_launch_attempt_count_year: 1,
    },
    {
      id: "ff9b6a09-2b5a-4ca3-934e-c86db21b7a1b",
      url: "https://ll.thespacedevs.com/2.2.0/launch/ff9b6a09-2b5a-4ca3-934e-c86db21b7a1b/",
      slug: "falcon-9-block-5-o3b-mpower-3-4",
      name: "Falcon 9 Block 5 | O3b mPower 3 & 4",
      status: {
        id: 8,
        name: "To Be Confirmed",
        abbrev: "TBC",
        description:
          "Awaiting official confirmation - current date is known with some certainty.",
      },
      last_updated: "2023-03-28T16:13:29Z",
      net: "2023-04-28T21:12:00Z",
      window_end: "2023-04-28T21:12:00Z",
      window_start: "2023-04-28T21:12:00Z",
      probability: -1,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 121,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        name: "SpaceX",
        type: "Commercial",
      },
      rocket: {
        id: 2551,
        configuration: {
          id: 164,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
          name: "Falcon 9",
          family: "Falcon",
          full_name: "Falcon 9 Block 5",
          variant: "Block 5",
        },
      },
      mission: {
        id: 6159,
        name: "O3b mPower 3 & 4",
        description:
          "Third and fourth of a constellation of eleven high-throughput communications satellites in Medium Earth Orbit (MEO) built by Boeing and operated by SES.",
        launch_designator: null,
        type: "Communications",
        orbit: {
          id: 12,
          name: "Medium Earth Orbit",
          abbrev: "MEO",
        },
      },
      pad: {
        id: 80,
        url: "https://ll.thespacedevs.com/2.2.0/pad/80/",
        agency_id: 121,
        name: "Space Launch Complex 40",
        info_url: null,
        wiki_url:
          "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
        map_url: "http://maps.google.com/maps?q=28.56194122,-80.57735736",
        latitude: "28.56194122",
        longitude: "-80.57735736",
        location: {
          id: 12,
          url: "https://ll.thespacedevs.com/2.2.0/location/12/",
          name: "Cape Canaveral, FL, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
          total_launch_count: 881,
          total_landing_count: 33,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
        total_launch_count: 175,
        orbital_launch_attempt_count: 174,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon_9_block__image_20210506060831.jpg",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6418,
      location_launch_attempt_count: 884,
      pad_launch_attempt_count: 177,
      agency_launch_attempt_count: 239,
      orbital_launch_attempt_count_year: 62,
      location_launch_attempt_count_year: 16,
      pad_launch_attempt_count_year: 14,
      agency_launch_attempt_count_year: 26,
    },
    {
      id: "0962fe02-4a3d-4131-8bc5-ee7bd2bc97fa",
      url: "https://ll.thespacedevs.com/2.2.0/launch/0962fe02-4a3d-4131-8bc5-ee7bd2bc97fa/",
      slug: "falcon-9-block-5-starlink-group-6-3",
      name: "Falcon 9 Block 5 | Starlink Group 6-3",
      status: {
        id: 2,
        name: "To Be Determined",
        abbrev: "TBD",
        description:
          "Current date is a placeholder or rough estimation based on unreliable or interpreted sources.",
      },
      last_updated: "2023-03-17T20:30:24Z",
      net: "2023-04-30T00:00:00Z",
      window_end: "2023-04-30T00:00:00Z",
      window_start: "2023-04-30T00:00:00Z",
      probability: null,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 121,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        name: "SpaceX",
        type: "Commercial",
      },
      rocket: {
        id: 7775,
        configuration: {
          id: 164,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
          name: "Falcon 9",
          family: "Falcon",
          full_name: "Falcon 9 Block 5",
          variant: "Block 5",
        },
      },
      mission: {
        id: 6293,
        name: "Starlink Group 6-3",
        description:
          "A batch of satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
        launch_designator: null,
        type: "Communications",
        orbit: {
          id: 8,
          name: "Low Earth Orbit",
          abbrev: "LEO",
        },
      },
      pad: {
        id: 80,
        url: "https://ll.thespacedevs.com/2.2.0/pad/80/",
        agency_id: 121,
        name: "Space Launch Complex 40",
        info_url: null,
        wiki_url:
          "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
        map_url: "http://maps.google.com/maps?q=28.56194122,-80.57735736",
        latitude: "28.56194122",
        longitude: "-80.57735736",
        location: {
          id: 12,
          url: "https://ll.thespacedevs.com/2.2.0/location/12/",
          name: "Cape Canaveral, FL, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
          total_launch_count: 881,
          total_landing_count: 33,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
        total_launch_count: 175,
        orbital_launch_attempt_count: 174,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230209213900.png",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6430,
      location_launch_attempt_count: 892,
      pad_launch_attempt_count: 182,
      agency_launch_attempt_count: 251,
      orbital_launch_attempt_count_year: 74,
      location_launch_attempt_count_year: 24,
      pad_launch_attempt_count_year: 19,
      agency_launch_attempt_count_year: 38,
    },
    {
      id: "16e0f780-7d6d-46bc-a0d4-cb23368e3501",
      url: "https://ll.thespacedevs.com/2.2.0/launch/16e0f780-7d6d-46bc-a0d4-cb23368e3501/",
      slug: "falcon-9-block-5-starlink-group-2-2",
      name: "Falcon 9 Block 5 | Starlink Group 2-2",
      status: {
        id: 2,
        name: "To Be Determined",
        abbrev: "TBD",
        description:
          "Current date is a placeholder or rough estimation based on unreliable or interpreted sources.",
      },
      last_updated: "2023-03-16T02:36:34Z",
      net: "2023-04-30T00:00:00Z",
      window_end: "2023-04-30T00:00:00Z",
      window_start: "2023-04-30T00:00:00Z",
      probability: null,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 121,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        name: "SpaceX",
        type: "Commercial",
      },
      rocket: {
        id: 7695,
        configuration: {
          id: 164,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
          name: "Falcon 9",
          family: "Falcon",
          full_name: "Falcon 9 Block 5",
          variant: "Block 5",
        },
      },
      mission: {
        id: 6211,
        name: "Starlink Group 2-2",
        description:
          "A batch of satellites for Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
        launch_designator: null,
        type: "Communications",
        orbit: {
          id: 8,
          name: "Low Earth Orbit",
          abbrev: "LEO",
        },
      },
      pad: {
        id: 80,
        url: "https://ll.thespacedevs.com/2.2.0/pad/80/",
        agency_id: 121,
        name: "Space Launch Complex 40",
        info_url: null,
        wiki_url:
          "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
        map_url: "http://maps.google.com/maps?q=28.56194122,-80.57735736",
        latitude: "28.56194122",
        longitude: "-80.57735736",
        location: {
          id: 12,
          url: "https://ll.thespacedevs.com/2.2.0/location/12/",
          name: "Cape Canaveral, FL, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
          total_launch_count: 881,
          total_landing_count: 33,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
        total_launch_count: 175,
        orbital_launch_attempt_count: 174,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20221102115051.png",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6429,
      location_launch_attempt_count: 892,
      pad_launch_attempt_count: 179,
      agency_launch_attempt_count: 251,
      orbital_launch_attempt_count_year: 73,
      location_launch_attempt_count_year: 24,
      pad_launch_attempt_count_year: 16,
      agency_launch_attempt_count_year: 38,
    },
    {
      id: "5fa79e26-9ada-4a81-9735-c0b0a96a157a",
      url: "https://ll.thespacedevs.com/2.2.0/launch/5fa79e26-9ada-4a81-9735-c0b0a96a157a/",
      slug: "falcon-9-block-5-starlink-group-2-6",
      name: "Falcon 9 Block 5 | Starlink Group 2-6",
      status: {
        id: 2,
        name: "To Be Determined",
        abbrev: "TBD",
        description:
          "Current date is a placeholder or rough estimation based on unreliable or interpreted sources.",
      },
      last_updated: "2023-03-16T02:38:54Z",
      net: "2023-04-30T00:00:00Z",
      window_end: "2023-04-30T00:00:00Z",
      window_start: "2023-04-30T00:00:00Z",
      probability: null,
      holdreason: "",
      failreason: "",
      hashtag: null,
      launch_service_provider: {
        id: 121,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/121/",
        name: "SpaceX",
        type: "Commercial",
      },
      rocket: {
        id: 7782,
        configuration: {
          id: 164,
          url: "https://ll.thespacedevs.com/2.2.0/config/launcher/164/",
          name: "Falcon 9",
          family: "Falcon",
          full_name: "Falcon 9 Block 5",
          variant: "Block 5",
        },
      },
      mission: {
        id: 6300,
        name: "Starlink Group 2-6",
        description:
          "A batch of satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
        launch_designator: null,
        type: "Communications",
        orbit: {
          id: 8,
          name: "Low Earth Orbit",
          abbrev: "LEO",
        },
      },
      pad: {
        id: 16,
        url: "https://ll.thespacedevs.com/2.2.0/pad/16/",
        agency_id: null,
        name: "Space Launch Complex 4E",
        info_url: null,
        wiki_url: "",
        map_url: "http://maps.google.com/maps?q=34.632+N,+120.611+W",
        latitude: "34.632",
        longitude: "-120.611",
        location: {
          id: 11,
          url: "https://ll.thespacedevs.com/2.2.0/location/11/",
          name: "Vandenberg SFB, CA, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
          total_launch_count: 715,
          total_landing_count: 9,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg",
        total_launch_count: 106,
        orbital_launch_attempt_count: 106,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230209220501.png",
      infographic: null,
      program: [],
      orbital_launch_attempt_count: 6429,
      location_launch_attempt_count: 720,
      pad_launch_attempt_count: 110,
      agency_launch_attempt_count: 251,
      orbital_launch_attempt_count_year: 73,
      location_launch_attempt_count_year: 11,
      pad_launch_attempt_count_year: 10,
      agency_launch_attempt_count_year: 38,
    },
  ];

  // const upcomingLaunches = await res.results.json();

  return { upcomingLaunches: res };
};

type LoaderProps = {
  name: string;
  net: string;
  image: string;
  last_updated: string;
  launch_date_local: number;
  window_start: number;
  window_end: number;
  launch_service_provider: {
    name: string;
    type: string;
    url: string;
  };
  mission: {
    description?: string;
    id: number;
    launch_designator: string;
    launch_library_id: number;
    name: string;
    orbit: {
      abbreviation: string;
      id: number;
      name: string;
      reference_system: string;
    };
    type: string;
  };
  pad: {
    map_image: string;
    url: string;
    location: {
      country_code: string;
      map_image: string;
      url: string;
      name: string;
    };
  };
  rocket: {
    configuration: {
      family: string;
      full_name: string;
      id: number;
      name: string;
      url: string;
      variant: string;
    };
  };
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
};

export default function Launch() {
  const [card, setCard] = useState(0);
  const { upcomingLaunches } = useLoaderData();
  // console.log(upcomingLaunches);

  return (
    <LayoutContainer
      image={background}
      classes={{ root: "text-white overflow-hidden" }}
    >
      <Container classes={{ container: "mb-20" }}>
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-[20px] font-light lg:text-[28px]">
              03 SPACE LAUNCHES {upcomingLaunches.length}
            </h1>
            <h2 className="text-[20px] font-light text-center lg:text-[28px]">
              MISSION
            </h2>
          </div>
          <div className="flex flex-col gap-4 h-screen overflow-scroll p-4">
            {upcomingLaunches.map(
              (
                { name, rocket, pad, last_updated }: LoaderProps,
                index: number
              ) => {
                return (
                  <Card
                    key={index}
                    classes={{
                      card: "cursor-pointer opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300",
                    }}
                    onClick={() => setCard(index)}
                  >
                    <p>NAME: {name}</p>
                    <p>ROCKET NAME: {rocket.configuration.name}</p>
                    <p>LOCATION: {pad.location.name}</p>
                    <p>DATE: {last_updated}</p>
                  </Card>
                );
              }
            )}
          </div>
        </div>
        <div className="flex flex-col mx-auto max-w-[370px] divide-y divide-solid">
          <h1 className="text-[20px] font-light text-center lg:text-[28px]">
            DETAILS
          </h1>
          {upcomingLaunches.map(({ mission }: LoaderProps, index: number) => {
            return card === index && <p>{mission?.description}</p>;
          })}
        </div>
      </Container>
    </LayoutContainer>
  );
}
