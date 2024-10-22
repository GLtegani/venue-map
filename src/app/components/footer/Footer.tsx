import Logo from "../Logo";
import NavFooter from "./NavFooter";
import InfosFooter from "./InfosFooter";
import CopyrightFooter from "./CopyrightFooter";

export default function Footer() {
  return (
    <footer className="bg-white text-left pb-4">
      <div
        className="mx-3 lg:mx-20 flex flex-col gap-2 2.5sm:gap-4 2.5sm:flex-row 
      2.5sm:items-end 2.5sm:justify-between"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <div>
            <Logo textColor="black" withBg={false} />
          </div>

          <NavFooter screenSize="small" />

          <InfosFooter screenSize="medium" />
        </div>
        <InfosFooter screenSize="small" />

        <CopyrightFooter screenSizeCopy="large" />

        <NavFooter screenSize="large" />
      </div>
    </footer>
  );
}
