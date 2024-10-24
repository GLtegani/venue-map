import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { archivo_narrow } from "../styles/fonts/fonts";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  // const { register, handleSubmit } = useForm();

  return (
    <header className="mt-24 text-center">
      <div>
        <div className="mb-3 mx-3">
          <h1
            className={`${archivo_narrow.className} text-2xl 3sm:text-3xl 
              2sm:text-4xl md:text-5xl lg:text-6xl text-bold
            `}
          >
            Cadastre-se já e garanta
          </h1>
          <h2
            className={`${archivo_narrow.className} text-2xl 3sm:text-3xl 
              2sm:text-4xl md:text-5xl lg:text-6xl text-bold
            `}
          >
            <span className="text-cyan-400">mais visibilidade</span> ao seu
            negócio!
          </h2>
        </div>

        <div className="mx-3">
          <p className={`lg:text-2xl text-lg sm:text-xl`}>
            Podendo criar e personalizar as informações de sua empresa
          </p>

          <p className={`lg:text-2xl text-lg sm:text-xl`}>
            que ficarão disponíveis online para quem acessar o site!
          </p>
        </div>
      </div>
      <Card
        className="w-11/12 mx-auto my-6 sm:w-9/12 lg:w-6/12 md:w-7/12 xl:w-5/12 2xl:w-4/12 
      2sm:w-10/12"
      >
        <CardHeader>
          <CardTitle className="text-xl text-nowrap 3sm:text-2xl 2sm:text-3xl">
            Preencha o formulário
          </CardTitle>
          <CardDescription className="text-base lg:text-lg">
            Ao preencher os campos, basta clicar no botão de cadastrar. Após
            isso seus dados serão verificados pela nossa equipe para a
            efetivação do seu registro.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action="#"
            method="post"
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="flex flex-col items-start justify-center w-11/12 gap-2 mb-3 max-w-60">
              <Label className="text-lg" htmlFor="name">
                Digite seu Nome
              </Label>
              <Input className="p-5" type="text" id="name" placeholder="Nome" />
            </div>

            <div className="flex flex-col items-start justify-center w-11/12 gap-2 mb-3 max-w-60">
              <Label className="text-lg" htmlFor="lastName">
                Digite seu Sobrenome
              </Label>
              <Input
                className="p-5"
                type="text"
                id="lastName"
                placeholder="Sobrenome"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-11/12 gap-2 mb-3 max-w-60">
              <Label className="text-lg" htmlFor="email">
                Digite seu Email
              </Label>
              <Input
                className="p-5"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-11/12 gap-2 mb-3 max-w-60">
              <div>
                <Label className="text-lg" htmlFor="password">
                  Digite sua senha{" "}
                </Label>
                <p className="text-gray-400 text-sm">(mínimo 6 caracteres)</p>
              </div>
              <Input
                className="p-5"
                type="password"
                id="password"
                placeholder="Senha"
              />
            </div>

            <div className="flex flex-col items-start justify-center w-11/12 gap-2 mb-3 max-w-60">
              <Label className="text-lg" htmlFor="confirmPassword">
                Digite novamente sua senha
              </Label>
              <Input
                className="p-5"
                type="password"
                id="confirmPassword"
                placeholder="Confirme a sua senha"
              />
            </div>

            <Button className="text-base p-4" type="submit">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </header>
  );
}
