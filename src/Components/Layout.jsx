import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Navbar />
      <main className="pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
