import { getAllRoutesPerLocation } from "@/prisma";
import { LocationsPageScreen } from "@/screens/LocationsPageScreen";

export default async function Locations() {
  const regionsRoutesCount = await getAllRoutesPerLocation();

  return <LocationsPageScreen regionsRoutesCount={regionsRoutesCount} />;
}
