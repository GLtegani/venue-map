import GuestSection from "./components/home-page/GuestSection";
import LeaseSection from "./components/home-page/LeaseSection";
import LoginSection from "./components/home-page/LoginSection";

export default function Home() {
  return (
    <main>
      <GuestSection />
      <LeaseSection />
      <LoginSection />
    </main>
  );
}
