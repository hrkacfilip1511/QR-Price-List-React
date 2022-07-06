import classes from "./LeftMenu.module.css";
import { FaCoffee, FaCocktail, FaGlassWhiskey } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";
import { IoBeerOutline, IoWine } from "react-icons/io5";
import { ImGlass } from "react-icons/im";
import { Link } from "react-router-dom";
const LeftMenu = (props) => {
  const isActive = props.leftMenuStatus ? ` ${classes.active}` : null;
  console.log(isActive);
  return (
    <div className={`${classes.menuContainer}  ${isActive}`}>
      <div className={classes.coffe}>
        <FaCoffee className={classes.logos} />
        <span className={classes.titles}>Kava</span>{" "}
      </div>
      <div className={classes.sweets}>
        <GiCakeSlice className={classes.logos} />
        <span className={classes.titles}>Slastice</span>
      </div>
      <div className={classes.beers}>
        <IoBeerOutline className={classes.logos} />
        <span className={classes.titles}>Pivo</span>
      </div>
      <div className={classes.wines}>
        <IoWine className={classes.logos} />
        <span className={classes.titles}>Vino</span>
      </div>
      <div className={classes.cocktails}>
        <FaCocktail className={classes.logos} />
        <span className={classes.titles}>Kokteli</span>
      </div>
      <div className={classes.juices}>
        <ImGlass className={classes.logos} />
        <span className={classes.titles}>Osvježavajuća pića</span>
      </div>
      <div className={classes.shots}>
        <FaGlassWhiskey className={classes.logos} />
        <span className={classes.titles}>Alkoholna pića</span>
      </div>
    </div>
  );
};
export default LeftMenu;
