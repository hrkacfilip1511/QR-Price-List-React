import classes from "./Water.module.css";

const Water = () => {
  return (
    <div className={classes.waterContainer}>
      <div className={classes.title}>
        <h1>Vode</h1>
      </div>
      <div className={classes.waterContent}>
        <div className={classes.waterRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.waterRow}>
          <span>Leda</span>
          <span>0.25l</span>
          <span>2,00</span>
        </div>
        <div className={classes.waterRow}>
          <span>Jana</span>
          <span>0.33l</span>
          <span>2,00</span>
        </div>
        <div className={classes.waterRow}>
          <span>Jana ledeni čaj brusnica</span>
          <span>0.25l</span>
          <span>2,50</span>
        </div>
        <div className={classes.waterRow}>
          <span>Jana ledeni čaj breskva</span>
          <span>0.25l</span>
          <span>2,50</span>
        </div>
        <div className={classes.waterRow}>
          <span>Jamnica</span>
          <span>0.25l</span>
          <span>2,00</span>
        </div>
        <div className={classes.waterRow}>
          <span>Kiseljak sensation</span>
          <span>0.25l</span>
          <span>2,50</span>
        </div>
      </div>
    </div>
  );
};

export default Water;
