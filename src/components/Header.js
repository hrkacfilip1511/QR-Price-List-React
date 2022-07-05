import classes from "./Header.module.css";

import caffeLogo from "../assets/caffeLogo.png";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.menu}>
        <div className={classes.first}></div>
        <div className={classes.second}></div>
        <div className={classes.third}></div>
      </div>
      <div className={classes.logoImg}>
        <img src={caffeLogo} alt="logo" className={classes.img} />
      </div>
    </div>
  );
};
export default Header;
