import TextCard from "./TextCard";

export default function LeaseSection() {
  return (
    <main className="flex flex-col mb-6 mx-3 mt-12 gap-10">
      <TextCard
        cardTitle={[
          "Procurando Sala Comercial",
          "Para &Aluguel ou &Compra?",
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
        isLeft
      />

      <TextCard
        cardTitle={[
          "Procurando Sala Comercial",
          "Para &Aluguel ou &Compra?",
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
        isRight
      />
    </main>
  );
}
