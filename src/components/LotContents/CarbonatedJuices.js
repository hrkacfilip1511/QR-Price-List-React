import classes from "./CarbonatedJuices.module.css";

const CarbonatedJuices = () => {
  return (
    <div className={classes.carbonatedContainer}>
      <div className={classes.title}>
        <h1>Gazirani sokovi</h1>
      </div>
      <div className={classes.carbonatedContent}>
        <div className={classes.carbonatedRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Coca Cola</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Coca Cola zero</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Coca Cola zero lemon</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Fanta</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Sprite</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Schweppes tangerine</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Schweppes bitterlemon</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Schweppes tonic</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Cockta</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Orangina</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
        <div className={classes.carbonatedRow}>
          <span>Pipi</span>
          <span>0.25l</span>
          <span>3,00</span>
        </div>
      </div>
    </div>
  );
};

export default CarbonatedJuices;
