import classes from "./RedWine.module.css";

const RedWine = () => {
  return (
    <div className={classes.redWineContainer}>
      <div className={classes.title}>
        <h1>Bijela Vina</h1>
      </div>
      <div className={classes.redWineContent}>
        <div className={classes.redWineRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.redWineRow}>
          <span>Carska Blatina</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.redWineRow}>
          <span>Nuić Blatina</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.redWineRow}>
          <span>Zadro Blatina</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.redWineRow}>
          <span>Vilinka Blatina</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.redWineRow}>
          <span>Rubis Blatina</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.redWineRow}>
          <span>Blatina Exclusive</span>
          <span>0.7l</span>
          <span>55,00</span>
        </div>
        <div className={classes.redWineRow}>
          <span>Zlatan Plavac</span>
          <span>0.7l</span>
          <span>70,00</span>
        </div>
      </div>
    </div>
  );
};

export default RedWine;
