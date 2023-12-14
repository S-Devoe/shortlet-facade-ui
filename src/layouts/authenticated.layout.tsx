import Logo from "@/assets/logo.component";
import Button, { NavButton } from "@/components/button/button";
import AuthFooter from "@/components/footer/authFooter";
import { SearchInput } from "@/components/forms/inputs/searchInput";
import BottomNav from "@/components/navigation/bottom-nav.component";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <>
    <header className={clsx("items-center gap-16 hidden md:flex")}>
      <Logo color="currentColor" />
      <SearchInput
        name="search"
        placeholder="Cabins, Rooms, Beachfront, House"
        className="shrink grow"
      />
      <div className="flex gap-6 shrink-0 items-center">
        <Button
          text="Become a host"
          variant={"orangeOutline"}
          width="medium"
          className={["w-fit h-fit shrink-0"]}
        />
        <NavButton />
      </div>
    </header>
  </>
);
const AuthenticatedLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className={clsx("px-5 md:px-16 xl:px-36 py-4 min-h-screen")}>
        <Header />
        <main>{children}</main>
      </div>
      <BottomNav /> {/* This is the mobile bottom navigation */}
      <AuthFooter /> {/* This is the desktop footer */}
    </div>
  );
};

export default AuthenticatedLayout;
