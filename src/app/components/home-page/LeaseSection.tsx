import Link from "next/link";
import { archivo_narrow } from "../../styles/fonts/fonts";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import TextCard from "./TextCard";

export default function LeaseSection() {
  return (
    <main className="flex flex-col mb-6 mx-3 mt-12 gap-10">
      <TextCard
        cardTitle={[
          "Procurando Sala Comercial",
          "Para Aluguel ou Compra?",
          "Entre em Contato",
          "Com Nossos Corretores",
        ]}
        cardText={[
          "Salas com vista para a ponte metálica, ",
          "segurança 24h por dia e ótimos ",
          "espaços para acomodar a sua empresa!",
          "Clique aqui para saber mais",
        ]}
        cardFooterPath="/contact"
        cardFooterText="Entre em Contato"
      />

      <Card className="p-1 md:p-12 lg:p-14 2md:ml-20 lg:ml-72 lg:mr-8 text-left shadow-lg shadow-cyan-400">
        <CardHeader
          className={`${archivo_narrow.className} text-2xl md:text-5xl  
            lg:text-6xl font-bold text-black
          `}
        >
          <div>
            <h2>Procurando Sala Comercial</h2>
            <h2>
              Para{" "}
              <span className="underline decoration-cyan-400">Aluguel</span> ou{" "}
              <span className="underline decoration-cyan-400">Compra?</span>
            </h2>
            <h2>Entre em Contato</h2>
            <h2>Com Nossos Corretores</h2>
          </div>
        </CardHeader>

        <CardBody>
          <div className="text-black lg:text-2xl text-lg sm:text-xl">
            <p>Salas com vista para a ponte metálica, </p>
            <p>segurança 24h por dia e ótimos </p>
            <p className="mb-1">espaços para acomodar a sua empresa!</p>
            <p>Clique aqui para saber mais</p>
          </div>
        </CardBody>
        <CardFooter>
          <Link
            className="text-base md:text-xl p-2 hover:bg-transparent border 
                hover:border-black hover:text-black bg-black text-white rounded-lg transition"
            href={"/contact"}
          >
            Entre em Contato
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
