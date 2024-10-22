import NavBarLink from "../NavBarLink";

interface NavFooterProps {
  screenSize: "small" | "large";
}

export default function NavFooter({ screenSize }: NavFooterProps) {
  return (
    <nav
      className={`${
        screenSize == "small"
          ? "2.5sm:hidden"
          : "2.5sm:block hidden 2.5sm:text-right"
      } `}
    >
      <ul>
        <li>
          <NavBarLink
            type="footer"
            screenType="large"
            path="/"
            linkText="Home"
          />
        </li>
        <li>
          <NavBarLink
            type="footer"
            screenType="large"
            path="/about"
            linkText="Conheça o Prédio"
          />
        </li>
        <li>
          <NavBarLink
            type="footer"
            screenType="large"
            path="/contact"
            linkText="Entre em contato"
          />
        </li>
        <li>
          <NavBarLink
            type="footer"
            screenType="large"
            path="/register"
            linkText="Cadastrar"
          />
        </li>
      </ul>
    </nav>
  );
}
