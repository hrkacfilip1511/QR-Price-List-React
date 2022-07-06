import classes from "./Header.module.css";

import caffeLogo from "../assets/caffeLogo.png";
import { useState } from "react";
const Header = (props) => {
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const toggleLeftMenu = () => {
    props.onChange();
    setLeftMenuOpen((prevStatus) => !prevStatus);
  };
  const isActiveFirst = isLeftMenuOpen ? `${classes.firstActive}` : null;
  const isActiveSecond = isLeftMenuOpen ? `${classes.secondActive}` : null;
  const isActiveThird = isLeftMenuOpen ? `${classes.thirdActive}` : null;
  return (
    <div className={classes.header}>
      <div className={classes.menu} onClick={toggleLeftMenu}>
        <div className={`${classes.first} ${isActiveFirst}`}></div>
        <div className={`${classes.second} ${isActiveSecond}`}></div>
        <div className={`${classes.third} ${isActiveThird}`}></div>
      </div>
      <div className={classes.logoImg}>
        <img src={caffeLogo} alt="logo" className={classes.img} />
      </div>
    </div>
  );
};
export default Header;
