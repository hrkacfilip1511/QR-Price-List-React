import CarbonatedJuices from "../LotContents/CarbonatedJuices";
import FreshJuices from "../LotContents/FreshJuices";
import NonCarbonatedJuices from "../LotContents/NonCarbonatedJuices";
import Water from "../LotContents/Water";
import classes from "./JuiceContents.module.css";

const JuiceContents = () => {
  return (
    <div>
      <div className={classes.firstJuiceDiv}>
        <Water />
        <NonCarbonatedJuices />
      </div>
      <div className={classes.secondJuiceDiv}>
        <CarbonatedJuices />
        <FreshJuices />
      </div>
    </div>
  );
};
export default JuiceContents;
