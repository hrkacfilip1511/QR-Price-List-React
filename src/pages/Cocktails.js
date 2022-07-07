import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";
import { useState } from "react";
import Footer from "../components/Footer";
const Cocktails = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <Footer />
    </div>
  );
};

export default Cocktails;
