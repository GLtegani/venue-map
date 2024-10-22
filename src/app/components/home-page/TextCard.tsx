import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { archivo_narrow } from "../../styles/fonts/fonts";
import Link from "next/link";
import { WebsitePath } from "@/app/utils/utils";

interface TextCardProps {
  cardTitle: string[];
  cardText: string[];
  cardFooterPath?: WebsitePath;
  cardFooterText?: string;
  isRight?: boolean;
  isLeft?: boolean;
}

export default function TextCard({
  cardTitle,
  cardText,
  cardFooterPath,
  cardFooterText,
  isRight,
  isLeft,
}: TextCardProps) {
  return (
    <div
      className={`flex justify-center ${
        isLeft ? "2.5sm:justify-start" : "2.5sm:justify-end"
      }  items-center`}
    >
      <Card
        className={`p-5 w-11/12 2.5sm:w-10/12 ls:w-8/12 xl:w-7/12 xl:p-24 ${
          isRight ? "xl:mr-14" : "xl:ml-14"
        }  text-left shadow-lg shadow-cyan-400`}
      >
        {/* Para criar títulos com o estilo diferente, é obrigatório adicionar o símbolo "&" para funcionar */}
        <CardHeader
          className={`${archivo_narrow.className} text-2xl md:text-5xl  
                lg:text-6xl font-bold text-black
              `}
        >
          <div>
            {cardTitle.map((title, index) => {
              const titleParts = title.split(" ");

              return (
                <h2 className="mb-1" key={index}>
                  {titleParts.map((part, partIndex) => {
                    if (part.startsWith("&")) {
                      const styledPart = part.slice(1);
                      return (
                        <span
                          key={partIndex}
                          className="underline decoration-cyan-400"
                        >
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
        </CardHeader>
        <CardBody>
          <div className="text-black lg:text-2xl text-lg sm:text-xl">
            {cardText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </CardBody>
        {cardFooterPath != null && cardFooterText != null ? (
          <CardFooter>
            <Link
              className="text-base md:text-xl text-nowrap p-2 hover:bg-transparent border 
                      hover:border-black hover:text-black bg-black text-white rounded-lg transition"
              href={cardFooterPath}
            >
              {cardFooterText}
            </Link>
          </CardFooter>
        ) : null}
      </Card>
    </div>
  );
}
