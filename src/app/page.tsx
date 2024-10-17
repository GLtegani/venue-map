import GuestSection from "./components/GuestSection";
import LeaseSection from "./components/LeaseSection";
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
