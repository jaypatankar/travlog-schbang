import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-screen p-0 m-0 relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};


export default AppLayout