import "@tremor/react/dist/esm/tremor.css";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/overview/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import { useStore } from "./context/context";
import PopupMessage from "./components/ui/PopupMessage";
import Orders from "./pages/Orders";
import { useEffect } from "react";

function App() {
  const { isDark, user } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-light font-neue text-light transition-all duration-300 dark:bg-dark dark:text-dark">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <div className="px-4 lg:ml-[200px]">
                  <Header />
                  <Overview />
                </div>
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Sidebar />
                <div className="relative px-4 lg:ml-[200px]">
                  <PopupMessage />
                  <Header />
                  <Products />
                </div>
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Sidebar />
                <div className="px-4 lg:ml-[200px]">
                  <Header />
                  <Orders />
                </div>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
