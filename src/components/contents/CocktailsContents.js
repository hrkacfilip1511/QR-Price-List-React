import Cocktail from "../LotContents/Cocktail";
import Shooters from "../LotContents/Shooters";
import classes from "./CocktailsContents.module.css";

const CocktailsContents = () => {
  return (
    <div className={classes.cocktailss}>
      <Cocktail />
      <Shooters />
    </div>
  );
};
export default CocktailsContents;
