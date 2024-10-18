import GuestSection from "./components/home-page/GuestSection";
import LeaseSection from "./components/home-page/LeaseSection";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

export default function Home() {
  return (
    <main>
      <ScrollShadow>
        <GuestSection />
        <LeaseSection />
      </ScrollShadow>
    </main>
  );
}
