import { LatLngLiteral, RoutesPerLocationResponse } from "@/domains";
// import axios from "axios";
// import bcrypt from "bcryptjs";
import dayjs from "dayjs";
import "dayjs/locale/cs";

export const convertDateToString = (date?: Date) => {
  dayjs.locale("cs");
  return date && dayjs(date).format("DD. MMMM YYYY");
};

export const locations = [
  { value: "olomoucky-kraj", label: "Olomoucký kraj" },
  { value: "jihomoravsky-kraj", label: "Jihomoravský kraj" },
  { value: "moravskoslezsky-kraj", label: "Moravskoslezský kraj" },
  { value: "zlinsky-kraj", label: "Zlínský kraj" },
  { value: "vysocina-kraj", label: "Kraj Vysočina" },
  { value: "pardubicky-kraj", label: "Pardubický kraj" },
  { value: "kralovehradecky-kraj", label: "Královehradecký kraj" },
  { value: "liberecky-kraj", label: "Liberecký kraj" },
  { value: "ustecky-kraj", label: "Ústecký kraj" },
  { value: "karlovarsky-kraj", label: "Karlovarský kraj" },
  { value: "plzensky-kraj", label: "Plzeňský kraj" },
  { value: "jihocesky-kraj", label: "Jihočeský kraj" },
  { value: "stredocesky-kraj", label: "Středočeský kraj" },
  { value: "praha-kraj", label: "Hlavní město Praha" },
];

export const createUrl = (stringValue: string): string => {
  // convert string value to lowercase
  stringValue = stringValue.toLowerCase();

  // replace spaces with dashes
  stringValue = stringValue.replace(/ /g, "-");

  // remove any non-alphanumeric characters
  stringValue = stringValue.replace(/[^a-zA-Z0-9-]/g, "");

  // construct the URL
  return stringValue;
};

// export const fetcher = async (path: string, params?: string) => {
//   return axios
//     .get(`${process.env.NEXT_PUBLIC_API_URL}/api/${path}${params ?? ""}`)
//     .then((values) => values.data);
// };

// export const fetcherPost = async (path: string, data: any, params?: string) => {
//   return axios
//     .post(`${process.env.NEXT_PUBLIC_API_URL}/api/${path}${params ?? ""}`, data)
//     .then((values) => values.data);
// };

export const isEqualCoords = (
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): boolean => {
  return a.lat === b.lat && a.lng === b.lng;
};

// export const reverseGeocoding = async (location: LatLngLiteral) => {
//   const data = await axios.get(
//     `https://api.mapbox.com/geocoding/v5/mapbox.places/${location?.lng},${location?.lat}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX}`
//   );

//   return data.data;
// };

// export const verifyPassword = async (
//   password: string,
//   hashedPassword: string
// ) => {
//   const isValid = await bcrypt.compare(password, hashedPassword);

//   return isValid;
// };

// export const hashPassword = async (password: string) => {
//   const hashedPassword = await bcrypt.hash(password, 10);

//   return hashedPassword;
// };

export const convertMetersToKilometers = (meters: number) => {
  var km = meters / 1000;
  return km.toFixed(1);
};

export function countRegionOccurrences(data: RoutesPerLocationResponse[]): {
  [region: string]: number;
} {
  const regionCounts: { [region: string]: number } = {};

  for (const item of data) {
    const regions = item.detail.regions || [];
    for (const region of regions) {
      if (regionCounts.hasOwnProperty(region)) {
        regionCounts[region]++;
      } else {
        regionCounts[region] = 1;
      }
    }
  }

  return regionCounts;
}
