import { getAllRoutesByLocation } from "@/prisma";
import { Container, MainHeadline, MainSubheadline, MaxWidth } from "@/ui/atoms";
import { locations } from "@/utils";
import { RoutesTable } from "./components";
import { Suspense } from "react";

interface LocationpageScreenProps {
  locationId?: string;
}

export const LocationPageScreen = async ({
  locationId,
}: LocationpageScreenProps) => {
  const locationByValue = locations.find(
    (location) => location?.value === locationId
  );

  const routesByLocation = await getAllRoutesByLocation(locationId ?? "");

  return (
    <section className="relative">
      <MaxWidth>
        <Container height="min-full" className="lg:pt-20">
          <MainHeadline>Destinace v okolí</MainHeadline>
          <MainSubheadline className="mb-10">
            {locationByValue?.label}
          </MainSubheadline>
          <Suspense fallback={<p>Načítají se trasy ke kraji.</p>}>
            <div className="overflow-x-auto">
              <RoutesTable routes={routesByLocation} />
            </div>
          </Suspense>
        </Container>
      </MaxWidth>
    </section>
  );
};
