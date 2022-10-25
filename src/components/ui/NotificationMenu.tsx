import { BellIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NotificationMenu: React.FC = () => {
  return (
    <Menu as="div" className="sm:relative">
      <Menu.Button className="outline-none">
        <BellIcon className="h-6 w-6 " />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-95 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 min-h-[50px] w-full rounded bg-dark shadow-lg focus:outline-none dark:bg-white sm:w-56">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`h-[50px] w-full rounded px-2 text-left text-sm ${
                  active
                    ? "bg-dark/20 text-dark dark:text-light"
                    : "text-dark dark:text-light"
                }`}
              >
                Order #1234 has been placed
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`h-[50px] w-full rounded px-2 text-left text-sm ${
                  active
                    ? "bg-dark/20 text-dark dark:text-light"
                    : "text-dark dark:text-light"
                }`}
              >
                Order #1234 has been placed
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationMenu;
