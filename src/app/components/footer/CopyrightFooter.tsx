interface CopyrightFooterProps {
  screenSizeCopy: "small" | "medium" | "large";
}

export default function CopyrightFooter({
  screenSizeCopy,
}: CopyrightFooterProps) {
  return (
    <p
      className={`${
        screenSizeCopy == "medium"
          ? "2md:hidden text-nowrap"
          : screenSizeCopy == "large"
          ? "hidden 2md:block text-lg xl:text-xl text-nowrap"
          : "text-nowrap"
      } text-gray-500`}
    >
      &copy; Desenvolvido por Gabriel Tegani
    </p>
  );
}
