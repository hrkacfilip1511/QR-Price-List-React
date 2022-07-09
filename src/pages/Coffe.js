import { useState } from "react";
import CoffeContents from "../components/contents/CoffeContents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";

const Coffe = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <CoffeContents />
      <Footer />
    </div>
  );
};

export default Coffe;
