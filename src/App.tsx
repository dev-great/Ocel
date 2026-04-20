import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./layouts";
import ScrollToTop from "./components/common/ScrollToTop";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../src/service/AuthContextType";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense>
          <ScrollToTop />
          <Layout />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
