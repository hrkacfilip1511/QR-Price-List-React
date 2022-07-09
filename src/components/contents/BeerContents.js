import BeerBackdrop from "../backdrops/BeerBackdrop";
import Beers from "../LotContents/Beers";
import classes from "./BeerContents.module.css";

const BeerContents = () => {
  return (
    <div className={classes.beers}>
      <Beers />
      <BeerBackdrop />
    </div>
  );
};
export default BeerContents;
