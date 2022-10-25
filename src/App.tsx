import "@tremor/react/dist/esm/tremor.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/overview/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import { useStore } from "./context/context";
import PopupMessage from "./components/ui/PopupMessage";
import Orders from "./pages/Orders";

function App() {
  const { isDark } = useStore();
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-light px-1 font-neue text-light transition-all duration-300 dark:bg-dark dark:text-dark sm:px-4 lg:ml-[200px]">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="px-4">
                <Header />
                <Overview />
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div className="relative px-4">
                <PopupMessage />
                <Header />
                <Products />
              </div>
            }
          />
          <Route
            path="/orders"
            element={
              <div className="px-4">
                <Header />
                <Orders />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
