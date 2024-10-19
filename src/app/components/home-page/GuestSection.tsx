import MainInfo from "./MainInfo";

export default function GuestSection() {
  return (
    <MainInfo
      bgImage="chronos"
      titles={[
        "Prédio Comercial",
        "&Chronos &Corporate",
        "Com a Melhor Localização",
        "De Osasco",
      ]}
      texts={[
        "Com médicos, dentistas, salão de beleza, advocacia e outras diversas variedades!",
        "Clique aqui para saber mais",
      ]}
      linkBtnText="Conheça o Prédio"
    />
  );
}
