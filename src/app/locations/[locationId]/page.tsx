import { GetServerSideProps, NextPage, NextPageContext } from "next";

import { AutocompleteOption } from "@/domains";
import { LocationPageScreen } from "@/screens/LocationPageScreen";
import { locations } from "@/utils";

interface NextPageProps {
  params: { locationId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function LocationPage({ params }: NextPageProps) {
  const { locationId } = params;

  return <LocationPageScreen locationId={locationId} />;
  // return <LocationPageScreen locationId={locationByValue?.label}  />;
}
