import classes from "./Cocktail.module.css";

const Cocktail = () => {
  return (
    <div className={classes.cocktailContainer}>
      <div className={classes.title}>
        <h1>Kokteli</h1>
      </div>
      <div className={classes.cocktailContent}>
        <div className={classes.cocktailRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Mojito</span>
          <span>0.5l</span>
          <span>7,00</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Cuba Libre</span>
          <span>0.5l</span>
          <span>6,00</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Aperol Spritz</span>
          <span>0.5l</span>
          <span>7,50</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Hugo</span>
          <span>0.5l</span>
          <span>7,00</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Sex on the beach</span>
          <span>0.5l</span>
          <span>6,50</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Pina Colada</span>
          <span>0.5l</span>
          <span>7,00</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Cosmopolitan</span>
          <span>0.5l</span>
          <span>6,50</span>
        </div>
        <div className={classes.cocktailRow}>
          <span>Viagra</span>
          <span>0.5l</span>
          <span>7,50</span>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
