import classes from "./Beers.module.css";
const Beers = () => {
  return (
    <div className={classes.beers}>
      <div className={classes.title}>
        <h1>Pivo</h1>
      </div>
      <div className={classes.contentForBeer}>
        <table className={classes.beersTable}>
          <tr>
            <td>Artikl</td>
            <td>Količina</td>
            <td>Cijena</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Becks</td>
            <td>0.3l</td>
            <td>3,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Heineken</td>
            <td>0.3l</td>
            <td>3,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Corona</td>
            <td>0,3l</td>
            <td>5,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Krombacher</td>
            <td>0,3l</td>
            <td>4,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Paulaner</td>
            <td>0.3l</td>
            <td>4,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Karlovačko</td>
            <td>0,3l</td>
            <td>2,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Ožujsko</td>
            <td>0,3l</td>
            <td>5,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Staropramen</td>
            <td>0.3l</td>
            <td>2,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Estrella</td>
            <td>0.3l</td>
            <td>3,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Stella Artois</td>
            <td>0.3l</td>
            <td>3,00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Beers;
