import { GeneratedRoute } from "@/domains";
import { VerticalStack } from "@/ui/atoms";
// import { MapContainer } from "components/Map";

import { DeleteButton, EditButton, RouteLabel } from "./components";
import { TransparentCard } from "@/ui/molecule";

interface RoutePageScreenProps {
  locationId: string;
  routeId: string;
  route: GeneratedRoute;
  isAuthor: boolean;
}

export const RoutePageScreen = ({
  locationId,
  routeId,
  route,
  isAuthor,
}: RoutePageScreenProps) => {
  return (
    <TransparentCard returnPath={`/locations/${locationId}`}>
      <VerticalStack className="relative flex-1 gap-4 p-12 lg:flex">
        <RouteLabel title="Název trasy" description={route?.detail?.name} />
        <RouteLabel
          title="Popis trasy"
          description={route?.detail?.description}
        />
        <RouteLabel
          title="Počet kilometrů"
          description={route?.detail?.distance}
        />
        <RouteLabel
          title="Autor"
          //@ts-ignore uprav ten typ
          description={route?.author?.name}
        />
        {isAuthor && (
          <div className="mt-auto mr-auto hidden gap-4 lg:flex">
            <EditButton
              redirectHref={`/locations/${locationId}/${routeId}/edit`}
            />
            <DeleteButton routeId={routeId} />
          </div>
        )}
      </VerticalStack>
      <div className="relative h-[35rem] lg:h-full lg:flex-1 lg:p-4">
        {/* <MapContainer staticView /> */}
      </div>
    </TransparentCard>
  );
};
