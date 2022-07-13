import Brandy from "../LotContents/Brandy";
import Gin from "../LotContents/Gin";
import Tequila from "../LotContents/Tequila";
import Vodka from "../LotContents/Vodka";
import Whiskey from "../LotContents/Whiskey";
import classes from "./AlcoholContents.module.css";

const AlcoholContents = () => {
  return (
    <div>
      <div className={classes.firstAlcoholDiv}>
        <Brandy />
        <Vodka />
      </div>
      <div className={classes.secondAlcoholDiv}>
        <Gin />
        <Tequila />
      </div>
      <div className={classes.thirdAlcoholDiv}>
        <Whiskey />
      </div>
    </div>
  );
};

export default AlcoholContents;
