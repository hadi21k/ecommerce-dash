import Button from "../ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import ProductForm from "./ProductForm";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "../../context/context";

const AddProduct: React.FC = () => {
  const { products, setProducts } = useStore();
  let [width, setWidth] = useState(window.innerWidth);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const resizing = () => {
      addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
    return () => {
      removeEventListener("resize", resizing);
    };
  });

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        text="Add Product"
        icon={<PlusIcon className="mr-2 h-5 w-5" />}
        onClick={openModal}
      />

      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            className="relative z-50"
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Overlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.1, ease: "easeIn" },
              }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"
            />

            <motion.div
              drag="y"
              dragListener={width < 640 ? true : false}
              dragConstraints={{ bottom: 0, top: 0 }}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
              dragElastic={{ top: 0, bottom: width < 640 ? 0.7 : 0 }}
              onDragEnd={(e, i) => {
                if (i.point.y > window.innerHeight * 0.95) {
                  setIsOpen(false);
                }
              }}
              initial={{
                y: width > 640 ? 0 : "100%",
                scale: width > 640 ? 0.9 : 1,
              }}
              animate={{
                scale: 1,
                y: 0,
                transition: {
                  duration: width > 640 ? 0.2 : 0.4,
                  ease: "easeOut",
                },
              }}
              exit={{
                scale: width > 640 ? 0.9 : 1,
                y: width < 640 ? "100%" : 0,
                transition: {
                  duration: width > 640 ? 0.1 : 0.3,
                  ease: "easeIn",
                },
              }}
              className="fixed top-20 inset-x-0 bottom-0 overflow-y-auto scrollbar-hide sm:inset-0"
            >
              <div className="flex min-h-full text-center sm:items-center sm:justify-center sm:p-4">
                <Dialog.Panel className="w-full transform overflow-hidden rounded-t-lg bg-light text-left align-middle shadow-xl transition-all sm:max-w-md sm:rounded-lg">
                  {width < 640 ? (
                    <div className="flex items-center justify-center py-2">
                      <span className="h-1 w-16 rounded-md bg-gray-400"></span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="p-4">
                    <Dialog.Title className="select-none  text-lg sm:text-xl">
                      Add new Product
                    </Dialog.Title>
                    <ProductForm
                      setIsOpen={setIsOpen}
                      products={products}
                      setProducts={setProducts}
                    />
                  </div>
                </Dialog.Panel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddProduct;
