import { useState } from "react";
import "./App.css";
import Backdrop from "./components/Backdrop";
import Header from "./components/Header";
import LeftMenu from "./components/ui/LeftMenu";
import WelcomeSection from "./components/ui/WelcomeSection";

function App() {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
    console.log(isLeftMenuOpen);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <WelcomeSection />
      <Backdrop />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
    </div>
  );
}

export default App;
