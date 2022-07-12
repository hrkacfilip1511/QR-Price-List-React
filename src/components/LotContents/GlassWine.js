import classes from "./GlassWine.module.css";

const GlassWine = () => {
  return (
    <div className={classes.glassWineContainer}>
      <div className={classes.title}>
        <h1>Vina na čašu</h1>
      </div>
      <div className={classes.glassWineContent}>
        <div className={classes.glassWineRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.glassWineRow}>
          <span>Carska Žilavka</span>
          <span>0.125l</span>
          <span>4,00</span>
        </div>
        <div className={classes.glassWineRow}>
          <span>Nuić Žilavka</span>
          <span>0.125l</span>
          <span>5,00</span>
        </div>
        <div className={classes.glassWineRow}>
          <span>Zadro Žilavka</span>
          <span>0.125l</span>
          <span>4,00</span>
        </div>
        <div className={classes.glassWineRow}>
          <span>Vilinka Blatina</span>
          <span>0.125l</span>
          <span>5,00</span>
        </div>
        <div className={classes.glassWineRow}>
          <span>Rubis Žilavka</span>
          <span>0.125l</span>
          <span>4,00</span>
        </div>
      </div>
    </div>
  );
};

export default GlassWine;
