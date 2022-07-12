import { useState } from "react";
import WineBackdrop from "../components/backdrops/WinesBackdrop";
import WinesContents from "../components/contents/WinesContents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";

const Wine = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <WineBackdrop />
      <WinesContents />
      <Footer />
    </div>
  );
};

export default Wine;
