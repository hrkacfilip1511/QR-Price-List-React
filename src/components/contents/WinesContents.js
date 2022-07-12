import Champagne from "../LotContents/Champagne";
import GlassWine from "../LotContents/GlassWine";
import RedWine from "../LotContents/RedWine";
import RoseWine from "../LotContents/RoseWines";
import WhiteWine from "../LotContents/WhiteWine";
import classes from "./WinesContents.module.css";

const WinesContents = () => {
  return (
    <div>
      <div className={classes.firstWineDiv}>
        <Champagne />
        <WhiteWine />
      </div>
      <div className={classes.secondWineDiv}>
        <RedWine />
        <GlassWine />
      </div>
      <div className={classes.thirdWineDiv}>
        <RoseWine />
      </div>
    </div>
  );
};

export default WinesContents;
