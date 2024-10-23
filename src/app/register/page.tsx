import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { archivo_narrow } from "../styles/fonts/fonts";

export default function RegisterPage() {
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

      <Card></Card>
    </header>
  );
}
