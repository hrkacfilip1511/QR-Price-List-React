import classes from "./Beers.module.css";
const Beers = () => {
  return (
    <div className={classes.beersContainer}>
      <div className={classes.title}>
        <h1>Pivo</h1>
      </div>
      <div className={classes.beersContent}>
        <div className={classes.beersRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.beersRow}>
          <span>Becks</span>
          <span>0.3l</span>
          <span>3,00</span>
        </div>
        <div className={classes.beersRow}>
          <span>Heineken</span>
          <span>0.3l</span>
          <span>3,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Corona</span>
          <span>0.3l</span>
          <span>5,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Krombacher</span>
          <span>0.3l</span>
          <span>4,00</span>
        </div>
        <div className={classes.beersRow}>
          <span>Paulaner</span>
          <span>0.3l</span>
          <span>4,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Karlovačko</span>
          <span>0.3l</span>
          <span>2,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Ožujsko</span>
          <span>0.3l</span>
          <span>2,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Staropramen</span>
          <span>0.3l</span>
          <span>2,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Estrella</span>
          <span>0.3l</span>
          <span>3,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Pan</span>
          <span>0.3l</span>
          <span>2,50</span>
        </div>
        <div className={classes.beersRow}>
          <span>Stella Artois</span>
          <span>0.3l</span>
          <span>3,00</span>
        </div>
      </div>
    </div>
  );
};
export default Beers;
