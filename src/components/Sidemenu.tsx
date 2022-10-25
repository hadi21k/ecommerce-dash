import { useState } from "react";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../context/context";
import { auth } from "../firebase/firebase";

interface Props {
  isLogged?: boolean;
}

type Pages = Array<{
  name: string;
  path: string;
}>;

const pages: Pages = [
  { name: "Overview", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Orders", path: "/orders" },
];

const Sidemenu: React.FC<Props> = ({ isLogged }) => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(
    pages.find((page) => page.path === pathname)?.name || pages[0].name
  );
  const navigate = useNavigate();
  const { setIsOpen } = useStore();
  return (
    <div
      className={`fixed inset-0 z-50 hidden min-h-screen w-[200px] flex-col items-center justify-between overflow-y-auto border-r border-gray bg-light dark:bg-dark lg:left-0 lg:flex`}
    >
      <div className="py-6 text-center">
        <h1 className="font-semibold text-light dark:text-dark">ecodash</h1>
      </div>
      <ul className="flex flex-col items-center space-y-6">
        {pages.map(({ path, name }) => (
          <motion.div key={name}>
            <Link to={path}>
              <motion.li
                onClick={() => setSelected(name)}
                className={`grid h-12 select-none place-items-center rounded px-8 font-medium outline-none transition duration-200 hover:text-light focus:outline-none dark:hover:bg-[#84cc16] dark:hover:text-light`}
              >
                {name}
                {selected === name && (
                  <motion.div
                    layoutId="selected"
                    transition={{ duration: 0.9, type: "spring" }}
                    className="absolute right-0 h-12 w-1 rounded bg-primary"
                  ></motion.div>
                )}
              </motion.li>
            </Link>
          </motion.div>
        ))}
      </ul>
      {isLogged ? (
        <div
          onClick={() => {
            signOut(auth);
            navigate("/login");
            setIsOpen(false);
          }}
          className="grid h-12 cursor-pointer place-items-center rounded px-8 font-medium text-light transition duration-200 hover:bg-dark hover:text-dark dark:text-dark dark:hover:bg-light dark:hover:text-light"
        >
          Logout
        </div>
      ) : (
        <Link to="/login">
          <div
            onClick={() => setIsOpen(false)}
            className="grid h-12 cursor-pointer place-items-center rounded px-8 font-medium text-light transition duration-200 hover:bg-dark hover:text-dark dark:text-dark dark:hover:bg-light dark:hover:text-light"
          >
            LogIn
          </div>
        </Link>
      )}
    </div>
  );
};

export default Sidemenu;
