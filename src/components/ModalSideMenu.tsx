import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../context/context";
import { auth } from "../firebase/firebase";

type Pages = Array<{
  name: string;
  path: string;
}>;

const pages: Pages = [
  { name: "Overview", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Orders", path: "/orders" },
];

const ModalSideMenu: React.FC = () => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(
    pages.find((page) => page.path === pathname)?.name || pages[0].name
  );
  const { isOpen, setIsOpen, isLogged } = useStore();
  const navigate = useNavigate();
  const ref = useRef(null);
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            initialFocus={ref}
            open={isOpen}
            className="relative z-50"
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Overlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.4, ease: "easeIn" },
              }}
              className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md backdrop-filter"
            />
            <motion.div
              initial={{ x: -220 }}
              animate={{ x: 0, transition: { duration: 0.2, ease: "easeOut" } }}
              exit={{ x: -220, transition: { duration: 0.3, ease: "easeIn" } }}
              className="fixed inset-0 overflow-y-auto"
            >
              <div className="flex min-h-full">
                <Dialog.Panel className="relative flex min-h-full w-[180px] flex-col items-center justify-between overflow-hidden rounded bg-light p-4 text-left transition-all dark:bg-dark">
                  <Link to="/">
                    <div ref={ref} className="mt-4 text-center ">
                      <h1 className="select-none font-semibold">ecodash</h1>
                    </div>
                  </Link>
                  <ul className="flex flex-col items-center space-y-6">
                    {pages.map(({ path, name }) => (
                      <motion.div key={name}>
                        <Link to={path}>
                          <motion.li
                            onClick={() => setSelected(name)}
                            className={`grid h-12 select-none place-items-center rounded px-8 font-medium outline-none transition duration-200 hover:text-light focus:outline-none dark:hover:bg-light dark:hover:text-light`}
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
                      className="grid h-12 cursor-pointer select-none place-items-center rounded px-8 font-medium transition duration-200 hover:bg-dark hover:text-dark dark:hover:bg-light dark:hover:text-light"
                    >
                      Logout
                    </div>
                  ) : (
                    <Link to="/login">
                      <div
                        onClick={() => setIsOpen(false)}
                        className="grid h-12 cursor-pointer select-none place-items-center rounded px-8 font-medium transition duration-200 hover:bg-dark hover:text-dark dark:hover:bg-light dark:hover:text-light"
                      >
                        LogIn
                      </div>
                    </Link>
                  )}
                </Dialog.Panel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalSideMenu;
