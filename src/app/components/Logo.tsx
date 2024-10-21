import Link from "next/link";
import Image from "next/image";
import { kite_one } from "../styles/fonts/fonts";

interface LogoProps {
  withBg: boolean;
  textColor?: "black";
}

export default function Logo({ textColor, withBg }: LogoProps) {
  return (
    <Link
      href={"/"}
      className={`flex ${
        textColor == "black" ? "text-black" : "text-white"
      } items-center justify-center text-base 
                md:text-xl 2md:text-2xl gap-1 ${kite_one.className}`}
    >
      <div
        className={`${
          withBg
            ? "w-14 h-14 bg-white rounded-full flex items-center justify-center"
            : ""
        } `}
      >
        <Image
          width={76}
          height={76}
          alt="NextUI hero Image"
          src="/logotype-venue-map.png"
        />
      </div>
      Venue Map
    </Link>
  );
}
