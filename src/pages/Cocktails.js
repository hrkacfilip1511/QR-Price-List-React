import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";
import { useState } from "react";
import Footer from "../components/Footer";
import CocktailsContents from "../components/contents/CocktailsContents";
const Cocktails = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <CocktailsContents />
      <Footer />
    </div>
  );
};

export default Cocktails;
