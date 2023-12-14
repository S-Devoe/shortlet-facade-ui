import Logo from "@/assets/logo.component";
import { ThemeColors } from "@/constants/colors";
import { Divider } from "antd";
import clsx from "clsx";
import Link from "next/link";

interface Props {}

const AuthFooter: React.FC<Props> = ({}) => (
  <footer
    className={clsx(
      "md:px-16 xl:px-36 py-10",
      "bg-primary",
      "font-sans",
      "hidden md:block"
    )}
  >
    <Divider
      style={{
        backgroundColor: ThemeColors.white.hex,
        margin: 0,
      }}
    />
    <div className="mt-8 flex justify-between text-white">
      <div className="text-center md:text-left">
        <Logo color={"currentColor"} />
        &copy;SHORTLET APP 2023
      </div>
      <div className="flex gap-6 font-medium">
        <Link href={"/about"}>About</Link>
        <Link href={"/about?s=faq"}>FAQ</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  </footer>
);

export default AuthFooter;
