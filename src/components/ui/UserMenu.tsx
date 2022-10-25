import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UserMenu: React.FC = () => {
  return (
    <Menu as="div" className="sm:relative">
      <Menu.Button className="h-6 w-6 rounded-full bg-primary outline-none"></Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 h-[100px] w-full sm:w-56 rounded bg-dark shadow-lg focus:outline-none dark:bg-white">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`h-[50px] w-full rounded p-2 text-left ${
                  active
                    ? "bg-dark/20 text-dark dark:text-light"
                    : "text-dark dark:text-light"
                }`}
              >
                Account
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`h-[50px] w-full rounded p-2 text-left ${
                  active
                    ? "bg-dark/20 text-dark dark:text-light"
                    : "text-dark dark:text-light"
                }`}
              >
                Settings
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
