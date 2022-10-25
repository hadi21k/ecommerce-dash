import NotificationMenu from "../ui/NotificationMenu";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import UserMenu from "../ui/UserMenu";
import { useStore } from "../../context/context";

const Header: React.FC = () => {
  const { setIsOpen, isDark, setIsDark } = useStore();
  const makeLight = () => {
    setIsDark(false);
    localStorage.setItem("isDark", "false");
  };
  const makeDark = () => {
    setIsDark(true);
    localStorage.setItem("isDark", "true");
  };
  return (
    <div className="mi-h-[80px] mb-1 py-4 relative">
      <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2  lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-semibold lg:text-left">
            Welcome back, Hadi
          </h1>
          <p className="text-center text-sm text-[#4b4b4b] lg:text-left">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex space-x-4">
          <NotificationMenu />
          <UserMenu />
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </div>
          <div>
            {isDark ? (
              <SunIcon className="h-6 w-6 cursor-pointer" onClick={makeLight} />
            ) : (
              <MoonIcon className="h-6 w-6 cursor-pointer" onClick={makeDark} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
