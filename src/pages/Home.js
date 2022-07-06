import { useState } from "react";
import Backdrop from "../components/Backdrop";
import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";
import MarkedProducts from "../components/ui/MarkedProducts";
import WelcomeSection from "../components/ui/WelcomeSection";

const Home = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <WelcomeSection />
      <Backdrop />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
      <MarkedProducts />
    </div>
  );
};

export default Home;
