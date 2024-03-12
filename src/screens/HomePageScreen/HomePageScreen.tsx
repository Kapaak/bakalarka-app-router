import Image from "next/image";

import {
  Container,
  HorizontalStack,
  MainHeadline,
  MainSubheadline,
  MaxWidth,
  VerticalStack,
} from "@/ui/atoms";
import { locations } from "@/utils";

import CyclistHeroImage from "@/public/images/hero-img.jpg";
import { SearchBar } from "@/ui/molecule";

export const HomePageScreen = () => {
  return (
    <section className="relative">
      <MaxWidth>
        <Container height="full">
          <HorizontalStack className="h-full justify-end gap-4 lg:justify-between">
            <VerticalStack className="mb-30 flex-1 justify-end gap-4 lg:mb-0 lg:justify-center">
              <div>
                <MainHeadline className="max-w-lg font-bold">
                  Cestujte a objevujte nové kouty
                </MainHeadline>
                <MainSubheadline className="font-bold">
                  ze sedla svého kola
                </MainSubheadline>
              </div>
              <SearchBar
                placeholder="Vyhledej kraj mé trasy..."
                baseRoute="/locations"
                options={locations}
              />
            </VerticalStack>
            <div className="relative z-20 hidden flex-1 lg:block">
              <Image
                src={CyclistHeroImage}
                alt="Cyklista sprintující na kole"
                fill
                className="z-0 m-auto max-h-[70rem] max-w-full object-cover object-center pl-[20%] md:object-right"
              />
            </div>
          </HorizontalStack>
        </Container>
      </MaxWidth>
    </section>
  );
};
