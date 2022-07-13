import classes from "./Pancakes.module.css";

const Pancakes = () => {
  return (
    <div className={classes.pancakesContainer}>
      <div className={classes.title}>
        <h1>Palačinke</h1>
      </div>
      <div className={classes.pancakesContent}>
        <div className={classes.pancakesRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Kinder Bueno</span>
          <span>tanjur</span>
          <span>6,00</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Nutella</span>
          <span>tanjur</span>
          <span>4,50</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Nutella lješnjak</span>
          <span>tanjur</span>
          <span>5,00</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Nutella plazma keks</span>
          <span>tanjur</span>
          <span>5,00</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Čokolada</span>
          <span>tanjur</span>
          <span>4,50</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Čokolada kokos</span>
          <span>tanjur</span>
          <span>5,00</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Bijela čokolada</span>
          <span>tanjur</span>
          <span>4,50</span>
        </div>
        <div className={classes.pancakesRow}>
          <span>Bijela čokolada lješnjak</span>
          <span>tanjur</span>
          <span>5,00</span>
        </div>
      </div>
    </div>
  );
};

export default Pancakes;
