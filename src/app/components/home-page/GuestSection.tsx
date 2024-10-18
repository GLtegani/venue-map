import Link from "next/link";
import { archivo_narrow } from "../../styles/fonts/fonts";
import Header from "../Header";

export default function GuestSection() {
  return (
    <div className="bg-chronos bg-no-repeat bg-cover h-screen bg-center">
      <Header />
      <main className="flex flex-col h-screen justify-center text-left ml-6 mr-3">
        <div
          className={`${archivo_narrow.className} text-2xl xl:text-7xl 3sm:text-3xl 2sm:text-4xl md:text-5xl flex flex-col 
            justify-center gap-1 lg:gap-4 lg:text-6xl font-bold text-white
          `}
        >
          <h1>Prédio Comercial</h1>
          <h2 className="text-cyan-400">Chronos Corporate</h2>
          <h2>Com a Melhor Localização</h2>
          <h2>De Osasco</h2>
        </div>

        <div className="mt-3 lg:mt-4">
          <div className="text-white lg:text-2xl text-lg sm:text-xl">
            <p>
              Com médicos, dentistas, salão de beleza, advocacia e outras
              diversas variedades!
            </p>
            <p>Clique aqui para saber mais</p>
          </div>

          <div className="mt-4 mb-8">
            <Link
              className="text-base md:text-xl p-2 hover:bg-transparent border 
              hover:border-white hover:text-white bg-white rounded-lg transition"
              href={"/about"}
            >
              Conheça o Prédio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
