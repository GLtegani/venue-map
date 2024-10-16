// import Image from "next/image";
import Link from "next/link";
import { archivo_narrow } from "./styles/fonts/fonts";

export default function Home() {
  return (
    <main className="mt-12">
      {/* <div className="flex items-center justify-center">
        <Image
          src={"/chronos.png"}
          alt="Imagem"
          className="w-9/12"
          width={300}
          height={300}
        />
      </div> */}

      <div className="flex flex-col justify-center text-left ml-6 mr-3">
        <div
          className={`${archivo_narrow.className} text-2xl 3sm:text-3xl 2sm:text-4xl md:text-5xl flex flex-col 
            justify-center gap-1 lg:gap-4 lg:text-6xl font-bold text-white
            `}
        >
          {/* <h1>Encontre a Especialidade</h1>
          <h2>que Procura no</h2>
          <h2 className="text-cyan-800">Edifício Chronos</h2> */}
          <h1>Prédio Comercial</h1>
          <h1 className="text-cyan-400">Chronos Corporate</h1>
          <h2>Com a Melhor Localização</h2>
          <h2>De Osasco</h2>
        </div>

        <div className="mt-3 lg:mt-4">
          <p className="text-white lg:text-2xl text-lg sm:text-xl">
            Com médicos, dentistas, salão de beleza, advocacia e outras diversas
            variedades!
          </p>
          <p className="text-white text-lg lg:text-2xl sm:text-xl">
            Clique aqui para saber mais
          </p>

          <div className="mt-4">
            <Link
              className="text-base md:text-xl p-2 transition hover:text-cyan-400 bg-white rounded-lg"
              href={"/about"}
            >
              Conheça o Prédio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
