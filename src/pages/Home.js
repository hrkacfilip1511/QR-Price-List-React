import { useState } from "react";
import Backdrop from "../components/Backdrop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";
import MarkedProducts from "../components/ui/MarkedProducts";
import WelcomeSection from "../components/ui/WelcomeSection";

const Home = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const [isLeftMenuBgChanged, setLeftMenuBgChanged] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };

  const someListener = () => {
    if (window.scrollY > 620) {
      setLeftMenuBgChanged(true);
    } else {
      setLeftMenuBgChanged(false);
    }
  };
  window.onscroll = someListener;
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <WelcomeSection />
      <Backdrop />
      <LeftMenu
        leftMenuBg={isLeftMenuBgChanged}
        leftMenuStatus={isLeftMenuOpen}
      />
      <MarkedProducts />
      <Footer />
    </div>
  );
};

export default Home;
