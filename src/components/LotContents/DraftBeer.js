import classes from "./DraftBeer.module.css";
const DraftBeer = () => {
  return (
    <div className={classes.draftBeersContainer}>
      <div className={classes.title}>
        <h1>Točeno Pivo</h1>
      </div>
      <div className={classes.draftBeersContent}>
        <div className={classes.draftBeersRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.draftBeersRow}>
          <span>Becks</span>
          <span>0.3l</span>
          <span>3,00</span>
        </div>
        <div className={classes.draftBeersRow}>
          <span>Krombacher</span>
          <span>0.3l</span>
          <span>3,00</span>
        </div>
        <div className={classes.draftBeersRow}>
          <span>Krombacher</span>
          <span>0.5l</span>
          <span>5,00</span>
        </div>
        <div className={classes.draftBeersRow}>
          <span>Paulaner Heffeweibier</span>
          <span>0.3l</span>
          <span>5,00</span>
        </div>

        <div className={classes.draftBeersRow}>
          <span>Staropramen</span>
          <span>0.3l</span>
          <span>4,50</span>
        </div>

        <div className={classes.draftBeersRow}>
          <span>Stella Artois</span>
          <span>0.3l</span>
          <span>3,00</span>
        </div>
      </div>
    </div>
  );
};
export default DraftBeer;
