import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase";

interface IStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLogged: boolean;
  user: any;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  products: any;
  setProducts: (products: any) => void;
  filteredBy: any;
  setFilteredBy: (sorted: any) => void;
  collectionType: "grid" | "table";
  setCollectionType: (collectionType: "grid" | "table") => void;
  popupmessage: boolean;
  setPopupMessage: React.Dispatch<React.SetStateAction<boolean>>;
  orders: any;
  setOrders: React.Dispatch<React.SetStateAction<any>>;
  filterOrders: any;
  setFilterOrders: React.Dispatch<React.SetStateAction<any>>;
}

const store: IStore = {
  isOpen: false,
  setIsOpen: () => {},
  isLogged: false,
  user: null,
  isDark: true,
  setIsDark: () => {},
  products: [],
  setProducts: () => {},
  filteredBy: [],
  setFilteredBy: () => {},
  collectionType: "grid",
  setCollectionType: () => {},
  orders: [],
  setOrders: () => {},
  filterOrders: [],
  setFilterOrders: () => {},
  popupmessage: false,
  setPopupMessage: () => {},
};

export const Store = createContext<IStore>(store);
export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredBy, setFilteredBy] = useState([]);
  const [popupmessage, setPopupMessage] = useState(false);
  const [collectionType, setCollectionType] = useState<"grid" | "table">(
    "grid"
  );
  const [orders, setOrders] = useState([]);
  const [filterOrders, setFilterOrders] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (u: any) => {
      if (user) {
        setIsLogged(true);
        setUser(u);
      } else {
        setIsLogged(false);
        setUser({});
      }
    });
  }, []);

  return (
    <Store.Provider
      value={{
        isOpen,
        setIsOpen,
        isLogged,
        user,
        isDark,
        setIsDark,
        products,
        setProducts,
        filteredBy,
        setFilteredBy,
        collectionType,
        setCollectionType,
        popupmessage,
        setPopupMessage,
        orders,
        setOrders,
        filterOrders,
        setFilterOrders,
      }}
    >
      {children}
    </Store.Provider>
  );
};
