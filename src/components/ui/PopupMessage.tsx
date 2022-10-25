import { useStore } from "../../context/context";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const PopupMessage = () => {
  const { popupmessage, setPopupMessage } = useStore();
  useEffect(() => {
    if (popupmessage) {
      setTimeout(() => {
        setPopupMessage(false);
      }, 3000);
    }
  }, [popupmessage]);

  return (
    <>
      <AnimatePresence>
        {popupmessage && (
          <motion.div
            initial={{ y: -100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-4 left-1/2 z-50 grid h-12 w-80 place-items-center rounded bg-dark text-lg text-dark dark:bg-white dark:text-red-500"
          >
            Product is added succesfuly
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopupMessage;
