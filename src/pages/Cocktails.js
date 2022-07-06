import Header from "../components/Header";
import LeftMenu from "../components/ui/LeftMenu";
import { useState } from "react";
const Cocktails = () => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const leftMenuHandler = () => {
    setLeftMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onChange={leftMenuHandler} />
      <LeftMenu leftMenuStatus={isLeftMenuOpen} />
    </div>
  );
};

export default Cocktails;
