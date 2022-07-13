import { useState } from "react";
import JuiceBackdrop from "../components/backdrops/JuicesBackdrop";
import JuiceContents from "../components/contents/JuiceContents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";

const Juices = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <JuiceBackdrop />
      <JuiceContents />
      <Footer />
    </div>
  );
};

export default Juices;
