import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { archivo_narrow } from "../styles/fonts/fonts";
import Link from "next/link";

interface TextCardProps {
  cardTitle: string[];
  cardText: string[];
  cardFooterPath: string;
  cardFooterText: string;
}

export default function TextCard({
  cardTitle,
  cardText,
  cardFooterPath,
  cardFooterText,
}: TextCardProps) {
  return (
    <Card className="p-1 md:p-12 lg:p-14 2md:mr-20 lg:mr-72 lg:ml-8 text-left shadow-lg shadow-cyan-400">
      <CardHeader
        className={`${archivo_narrow.className} text-2xl md:text-5xl  
            lg:text-6xl font-bold text-black
          `}
      >
        <div>
          {cardTitle.map((title, index) => (
            <h2 key={index}>{title}</h2>
          ))}
          {/* <h2>Procurando Sala Comercial</h2>
          <h2>
            Para <span className="underline decoration-cyan-400">Aluguel</span>{" "}
            ou <span className="underline decoration-cyan-400">Compra?</span>
          </h2>
          <h2>Entre em Contato</h2>
          <h2>Com Nossos Corretores</h2> */}
        </div>
      </CardHeader>

      <CardBody>
        <div className="text-black lg:text-2xl text-lg sm:text-xl">
          {cardText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          {/* <p>Salas com vista para a ponte metálica, </p>
          <p>segurança 24h por dia e ótimos </p>
          <p className="mb-1">espaços para acomodar a sua empresa!</p>
          <p>Clique aqui para saber mais</p> */}
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
