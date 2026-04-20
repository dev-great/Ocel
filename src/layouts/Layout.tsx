import { ToastContainer } from "react-toastify";
import AppRoute from "../navigations/AppRoute";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <main className="grow">
        <AppRoute />
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
