import classes from "./MarkedProducts.module.css";
import cake from "../../assets/sweets.jpg";
import cocktail from "../../assets/cocktails.jpg";
import wine from "../../assets/wine.jpg";
const MarkedProducts = () => {
  return (
    <div className={classes.markedContainer}>
      <div className={classes.bestCakes}>
        <div className={classes.cakesParagraph}>
          <h2>Slastice</h2>
          <p>Doživite nezaboravno iskustvo s našim ukusnim slasticama.</p>
        </div>
        <img src={cake} alt="cake" />
      </div>
      <div className={classes.bestWines}>
        <img src={wine} alt="wine" />
        <div className={classes.winesParagraph}>
          <h2>Vina</h2>
          <p>
            Kroz našu ponudu vina omogućujemo putovanje najljepšim dijelovima
            Europe.
          </p>
        </div>
      </div>
      <div className={classes.bestCocktails}>
        <div className={classes.cocktailsParagraph}>
          <h2>Kokteli</h2>
          <p>Provedite dosad najbolje ljeto uz naše osvježavajuće koktele.</p>
        </div>
        <img src={cocktail} alt="cocktail" />
      </div>
    </div>
  );
};

export default MarkedProducts;
