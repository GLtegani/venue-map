import NavBarLink from "./header/NavBarLink";
import Logo from "./Logo";
import { MapPin } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-white text-left pb-4">
      <div className="mx-3 lg:mx-20 flex flex-col gap-2 2.5sm:gap-4 2.5sm:flex-row 2.5sm:items-end 2.5sm:justify-between">
        <div className="flex flex-col justify-center items-start gap-2">
          <div>
            <Logo textColor="black" withBg={false} />
          </div>

          <nav className="2.5sm:hidden">
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

          <div
            className="mt-1 hidden 2.5sm:flex 2.5sm:mt-0 
          2.5sm:text-left 2.5sm:flex-col 2.5sm:items-start 2.5sm:justify-center 2.5sm:text-lg xl:text-xl"
          >
            <p className="flex items-center justify-center gap-1 flex-nowrap">
              {<MapPin />} R. Narciso Sturlini, 62 - Centro
            </p>
            <p className="text-nowrap 2md:hidden">
              &copy; Desenvolvido por Gabriel Tegani
            </p>
          </div>
        </div>
        <div
          className="mt-1 2.5sm:hidden 2.5sm:mt-0 1sm:flex-row 1sm:items-center 1sm:gap-3 
        text-left flex flex-col items-start justify-center"
        >
          <p className="flex items-center justify-center gap-1 flex-nowrap">
            {<MapPin />} R. Narciso Sturlini, 62 - Centro
          </p>
          <p className="text-nowrap">&copy; Desenvolvido por Gabriel Tegani</p>
        </div>

        <p className="text-nowrap hidden 2md:block text-lg xl:text-xl">
          &copy; Desenvolvido por Gabriel Tegani
        </p>

        <nav className="2.5sm:block 2.5sm:text-right hidden">
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
      </div>
    </footer>
  );
}
