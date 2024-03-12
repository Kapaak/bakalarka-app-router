import { Logo, MaxWidth } from "@/ui/atoms";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="py-6">
      <MaxWidth>
        <div className="flex justify-between">
          <Logo />
          <Navigation />
        </div>
      </MaxWidth>
    </header>
  );
}
