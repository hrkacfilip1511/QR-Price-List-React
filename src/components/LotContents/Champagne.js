import classes from "./Champagne.module.css";

const Champagne = () => {
  return (
    <div className={classes.champagneContainer}>
      <div className={classes.title}>
        <h1>Šampanjci</h1>
      </div>
      <div className={classes.champagneContent}>
        <div className={classes.champagneRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.champagneRow}>
          <span>Moët Imperial</span>
          <span>0.75l</span>
          <span>150,00</span>
        </div>
        <div className={classes.champagneRow}>
          <span>Moët Ice</span>
          <span>0.75l</span>
          <span>195,00</span>
        </div>
        <div className={classes.champagneRow}>
          <span>Moët Ice Rose</span>
          <span>0.75l</span>
          <span>210,00</span>
        </div>
        <div className={classes.champagneRow}>
          <span>Moët N.I.R.</span>
          <span>0.75l</span>
          <span>210,00</span>
        </div>
      </div>
    </div>
  );
};

export default Champagne;
