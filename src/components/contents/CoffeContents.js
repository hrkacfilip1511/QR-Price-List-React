import CoffeBackdrop from "../backdrops/CoffeBackdrop";
import HotDrinks from "../LotContents/HotDrinks";
import Teas from "../LotContents/Teas";
import classes from "./CoffeContents.module.css";

const CoffeContents = () => {
  return (
    <div className={classes.coffesAndTeas}>
      <HotDrinks />
      <Teas />
      <CoffeBackdrop />
    </div>
  );
};
export default CoffeContents;
