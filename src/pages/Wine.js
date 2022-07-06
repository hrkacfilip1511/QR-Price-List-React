import { useState } from "react";
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
    </div>
  );
};

export default Wine;
