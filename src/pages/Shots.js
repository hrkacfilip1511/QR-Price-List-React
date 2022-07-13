import { useState } from "react";
import AlcoholBackdrop from "../components/backdrops/AlcoholBackdrop";
import AlcoholContents from "../components/contents/AlcoholContents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";

const Shots = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <AlcoholBackdrop />
      <AlcoholContents />
      <Footer />
    </div>
  );
};

export default Shots;
