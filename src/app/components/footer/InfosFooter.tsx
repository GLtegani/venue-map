import { MapPin } from "@phosphor-icons/react/dist/ssr";
import CopyrightFooter from "./CopyrightFooter";

interface InfosFooterProps {
  screenSize: "small" | "medium" | "large";
}

export default function InfosFooter({ screenSize }: InfosFooterProps) {
  return (
    <div
      className={`${
        screenSize == "small"
          ? `2.5sm:hidden 1sm:flex-row 1sm:items-center 1sm:gap-3 
          text-left flex flex-col items-start justify-center`
          : `hidden 2.5sm:flex 2.5sm:mt-0 2.5sm:text-left 2.5sm:flex-col 
          2.5sm:items-start 2.5sm:justify-center 2.5sm:text-lg xl:text-xl`
      }
      mt-1`}
    >
      <p className="flex items-center justify-center gap-1 flex-nowrap">
        {<MapPin />} R. Narciso Sturlini, 62 - Centro
      </p>

      <CopyrightFooter
        screenSizeCopy={`${
          screenSize == "small"
            ? "small"
            : screenSize == "medium"
            ? "medium"
            : "large"
        }`}
      />
    </div>
  );
}
