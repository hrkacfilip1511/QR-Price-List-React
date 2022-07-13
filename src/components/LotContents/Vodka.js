import classes from "./Vodka.module.css";

const Vodka = () => {
  return (
    <div className={classes.vodkaContainer}>
      <div className={classes.title}>
        <h1>Vodke</h1>
      </div>
      <div className={classes.vodkaContent}>
        <div className={classes.vodkaRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.vodkaRow}>
          <span>Belvedere</span>
          <span>0.03l</span>
          <span>6,00</span>
        </div>
        <div className={classes.vodkaRow}>
          <span>Grey Goose</span>
          <span>0.03l</span>
          <span>7,00</span>
        </div>
        <div className={classes.vodkaRow}>
          <span>Smirnoff</span>
          <span>0.03l</span>
          <span>3,00</span>
        </div>
        <div className={classes.vodkaRow}>
          <span>Absolut</span>
          <span>0.03l</span>
          <span>2,00</span>
        </div>
        <div className={classes.vodkaRow}>
          <span>Puschkin Black</span>
          <span>0.03l</span>
          <span>3,00</span>
        </div>
      </div>
    </div>
  );
};

export default Vodka;
