import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.css";
const Layout = () => {
  return (
    <div className="layout"> 
      <Navbar />
      <main>
        <Outlet /> {/* Renders the current route's component */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
