import classes from "./Cocktail.module.css";
const Cocktail = () => {
  return (
    <div className={classes.cocktail}>
      <div className={classes.title}>
        <h1>Kokteli</h1>
      </div>
      <div className={classes.contentForCocktail}>
        <table className={classes.cocktailTable}>
          <tr>
            <td>Artikl</td>
            <td>Količina</td>
            <td>Cijena</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Mojito</td>
            <td>0,5l</td>
            <td>7,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Cuba Libre</td>
            <td>0,5l</td>
            <td>6,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Aperol Spritz</td>
            <td>0,5l</td>
            <td>7,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Hugo</td>
            <td>0,5l</td>
            <td>6,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Sex On The Beach</td>
            <td>0,5l</td>
            <td>6,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Cosmopolitan</td>
            <td>0,5l</td>
            <td>6,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Pina colada</td>
            <td>0,5l</td>
            <td>6,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Viagra</td>
            <td>0,5l</td>
            <td>7,50</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Cocktail;
