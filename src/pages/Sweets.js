import { useState } from "react";
import SweetsBackdrop from "../components/backdrops/SweetsBackdrop";
import SweetsContents from "../components/contents/SweetsContents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";

const Sweets = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <SweetsBackdrop />
      <SweetsContents />
      <Footer />
    </div>
  );
};

export default Sweets;
