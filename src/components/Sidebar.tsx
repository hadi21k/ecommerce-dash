import { useStore } from "../context/context";
import ModalSideMenu from "./ModalSideMenu";
import Sidemenu from "./Sidemenu";

const Sidebar = () => {
  const { isLogged } = useStore();
  return (
    <>
      <Sidemenu isLogged={isLogged} />
      <ModalSideMenu />
    </>
  );
};

export default Sidebar;
