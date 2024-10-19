import { archivo_narrow } from "@/app/styles/fonts/fonts";
import Link from "next/link";

interface MainInfoProps {
  bgImage: "chronos" | "chronosPonte";
  titles: string[];
  texts: string[];
  linkBtnText: string;
}

export default function MainInfo({
  titles,
  bgImage,
  linkBtnText,
  texts,
}: MainInfoProps) {
  if (bgImage == "chronos") {
    return (
      <div
        className="bg-chronos bg-fixed bg-no-repeat bg-cover h-screen bg-center
            flex flex-col justify-center items-start"
      >
        <main className="flex flex-col justify-center text-left ml-6 mr-3 mt-10">
          <div
            className={`${archivo_narrow.className} text-2xl xl:text-7xl 3sm:text-3xl 
                2sm:text-4xl md:text-5xl flex flex-col 
                  justify-center gap-1 lg:gap-4 lg:text-6xl font-bold text-white
                `}
          >
            {titles.map((title, index) => {
              const titleParts = title.split(" ");

              return (
                <h2 key={index}>
                  {titleParts.map((part, partIndex) => {
                    if (part.startsWith("&")) {
                      const styledPart = part.slice(1);
                      return (
                        <span key={partIndex} className="text-cyan-400">
                          {styledPart}{" "}
                        </span>
                      );
                    }

                    return <span key={partIndex}>{part} </span>;
                  })}
                </h2>
              );
            })}
          </div>

          <div className="mt-3 flex flex-col gap-2 lg:mt-4">
            <div className="text-white lg:text-2xl text-lg sm:text-xl">
              {texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="mt-4 mb-8">
              <Link
                className="text-base md:text-xl p-2 hover:bg-transparent border 
                    hover:border-white hover:text-white bg-white rounded-lg transition"
                href={"/about"}
              >
                {linkBtnText}
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  } else if (bgImage == "chronosPonte") {
    return (
      <div
        className="bg-chronosPonte bg-fixed bg-no-repeat bg-cover h-screen bg-center
        flex flex-col justify-center items-start"
      >
        <main className="flex flex-col justify-center text-left ml-6 mr-3 mt-10">
          <div
            className={`${archivo_narrow.className} text-2xl xl:text-7xl 3sm:text-3xl 
                2sm:text-4xl md:text-5xl flex flex-col 
                  justify-center gap-1 lg:gap-4 lg:text-6xl font-bold text-white
                `}
          >
            {titles.map((title, index) => {
              const titleParts = title.split(" ");

              return (
                <h2 key={index}>
                  {titleParts.map((part, partIndex) => {
                    if (part.startsWith("&")) {
                      const styledPart = part.slice(1);
                      return (
                        <span key={partIndex} className="text-cyan-400">
                          {styledPart}{" "}
                        </span>
                      );
                    }

                    return <span key={partIndex}>{part} </span>;
                  })}
                </h2>
              );
            })}
          </div>

          <div className="mt-3 flex flex-col gap-2 lg:mt-4">
            <div className="text-white lg:text-2xl text-lg sm:text-xl">
              {texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="mt-4 mb-8">
              <Link
                className="text-base md:text-xl p-2 hover:bg-transparent border 
                    hover:border-white hover:text-white bg-white rounded-lg transition"
                href={"/about"}
              >
                {linkBtnText}
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
