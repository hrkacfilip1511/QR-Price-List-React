import Beers from "../LotContents/Beers";
import DraftBeer from "../LotContents/DraftBeer";
import classes from "./BeerContents.module.css";

const BeerContents = () => {
  return (
    <div className={classes.beers}>
      <Beers />
      <DraftBeer />
    </div>
  );
};
export default BeerContents;
