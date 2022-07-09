import HotDrinks from "../LotContents/HotDrinks";
import Teas from "../LotContents/Teas";
import classes from "./CoffeContents.module.css";

const CoffeContents = () => {
  return (
    <div className={classes.coffesAndTeas}>
      <HotDrinks />
      <Teas />
    </div>
  );
};
export default CoffeContents;
