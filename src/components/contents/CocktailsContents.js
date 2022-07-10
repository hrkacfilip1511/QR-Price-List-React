import CocktailBackdrop from "../backdrops/CocktailsBackdrop";
import Cocktail from "../LotContents/Cocktail";
import Shooters from "../LotContents/Shooters";
import classes from "./CoffeContents.module.css";

const CocktailsContents = () => {
  return (
    <div className={classes.cocktailss}>
      <Cocktail />
      <Shooters />
      <CocktailBackdrop />
    </div>
  );
};
export default CocktailsContents;
