import classes from "./WhiteWine.module.css";

const WhiteWine = () => {
  return (
    <div className={classes.whiteWineContainer}>
      <div className={classes.title}>
        <h1>Bijela Vina</h1>
      </div>
      <div className={classes.whiteWineContent}>
        <div className={classes.whiteWineRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.whiteWineRow}>
          <span>Carska Žilavka</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.whiteWineRow}>
          <span>Nuić Žilavka</span>
          <span>0.7l</span>
          <span>35,00</span>
        </div>
        <div className={classes.whiteWineRow}>
          <span>Zadro Žilavka</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.whiteWineRow}>
          <span>Vilinka Žilavka</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.whiteWineRow}>
          <span>Rubis Žilavka</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.whiteWineRow}>
          <span>Žilavka Exclusive</span>
          <span>0.7l</span>
          <span>55,00</span>
        </div>
        <div className={classes.whiteWineRow}>
          <span>Malvazija Kozlović</span>
          <span>0.7l</span>
          <span>50,00</span>
        </div>
      </div>
    </div>
  );
};

export default WhiteWine;
