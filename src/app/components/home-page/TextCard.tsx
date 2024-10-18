import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { archivo_narrow } from "../../styles/fonts/fonts";
import Link from "next/link";

interface TextCardProps {
  cardTitle: string[];
  cardText: string[];
  cardFooterPath: string;
  cardFooterText: string;
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
  if (isLeft || !isRight) {
    return (
      <Card
        className="p-5 max-w-5xl w-11.5/12 mx-auto 2sm:w-10/12 1sm:w-9/12 1md:w-8/12 2md:mr-64 
      lg:mr-80 xl:mr-96 text-left shadow-lg shadow-cyan-400"
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
        <CardFooter>
          <Link
            className="text-base md:text-xl p-2 hover:bg-transparent border 
                  hover:border-black hover:text-black bg-black text-white rounded-lg transition"
            href={cardFooterPath}
          >
            {cardFooterText}
          </Link>
        </CardFooter>
      </Card>
    );
  } else if (isRight) {
    return (
      <Card
        className="p-5 max-w-5xl w-11.5/12 mx-auto 2sm:w-10/12 1sm:w-9/12 1md:w-8/12 2md:ml-64 
      lg:ml-80 xl:ml-96 text-left shadow-lg shadow-cyan-400"
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
        <CardFooter>
          <Link
            className="text-base md:text-xl p-2 hover:bg-transparent border 
                  hover:border-black hover:text-black bg-black text-white rounded-lg transition"
            href={cardFooterPath}
          >
            {cardFooterText}
          </Link>
        </CardFooter>
      </Card>
    );
  }
}
