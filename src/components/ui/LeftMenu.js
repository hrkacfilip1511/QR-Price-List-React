import classes from "./LeftMenu.module.css";
import { FaCoffee, FaCocktail, FaGlassWhiskey, FaHome } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";
import { IoBeerOutline, IoWine } from "react-icons/io5";
import { ImGlass } from "react-icons/im";
import { Link } from "react-router-dom";
const LeftMenu = (props) => {
  const isActive = props.leftMenuStatus ? ` ${classes.active}` : null;

  return (
    <div className={`${classes.menuContainer}  ${isActive}`}>
      <Link to="/">
        <div className={classes.home}>
          <FaHome className={classes.logos} />
          <span className={classes.titles}>Naslovna</span>
        </div>
      </Link>
      <Link to="/coffes">
        <div className={classes.coffe}>
          <FaCoffee className={classes.logos} />
          <span className={classes.titles}>Kava</span>
        </div>
      </Link>
      <Link to="/sweets">
        <div className={classes.sweets}>
          <GiCakeSlice className={classes.logos} />
          <span className={classes.titles}>Slastice</span>
        </div>
      </Link>
      <Link to="/beers">
        <div className={classes.beers}>
          <IoBeerOutline className={classes.logos} />
          <span className={classes.titles}>Pivo</span>
        </div>
      </Link>
      <Link to="/wines">
        <div className={classes.wines}>
          <IoWine className={classes.logos} />
          <span className={classes.titles}>Vino</span>
        </div>
      </Link>
      <Link to="/cocktails">
        <div className={classes.cocktails}>
          <FaCocktail className={classes.logos} />
          <span className={classes.titles}>Kokteli</span>
        </div>
      </Link>

      <Link to="/juices">
        <div className={classes.juices}>
          <ImGlass className={classes.logos} />
          <span className={classes.titles}>Osvježavajuća pića</span>
        </div>
      </Link>
      <Link to="/alcohol">
        <div className={classes.shots}>
          <FaGlassWhiskey className={classes.logos} />
          <span className={classes.titles}>Alkoholna pića</span>
        </div>
      </Link>
    </div>
  );
};
export default LeftMenu;
