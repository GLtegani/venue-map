import MainInfo from "./MainInfo";

export default function LoginSection() {
  return (
    <MainInfo
      bgImage="chronosPonte"
      titles={[
        "Já é &Condômino",
        "Do Prédio?",
        "Clique Aqui Agora",
        "E Faça Seu Cadastro",
      ]}
      texts={[
        "Ao realizar seu cadastro, você poderá adicionar",
        "informações de sua empresa que serão exibidas aqui",
        "para quem acessar, aumentando a visibilidade do seu negócio!",
        "Clique aqui para se cadastrar",
      ]}
      linkBtnText="Cadastrar Agora"
      styledBtn="with-border"
    />
  );
}
