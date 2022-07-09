import { useState } from "react";
import BeerContents from "../components/contents/BeerContents";
import Footer from "../components/Footer";
import Header from "../components/Header";

import LeftMenu from "../components/ui/LeftMenu";

const Beer = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <BeerContents />
      <Footer />
    </div>
  );
};

export default Beer;
