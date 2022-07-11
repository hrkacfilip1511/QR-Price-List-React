import classes from "./DraftBeer.module.css";
const DraftBeer = () => {
  return (
    <div className={classes.draftBeer}>
      <div className={classes.title}>
        <h1>Točeno Pivo</h1>
      </div>
      <div className={classes.contentForDraftBeer}>
        <table className={classes.draftBeerTable}>
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
            <td className={classes.subtitles}>Krombacher</td>
            <td>0.3l</td>
            <td>3,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Krombacher</td>
            <td>0,5l</td>
            <td>5,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Paulaner Heffeweibier</td>
            <td>0,3l</td>
            <td>5,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Stella Artois</td>
            <td>0.3l</td>
            <td>4,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Staropramen</td>
            <td>0,3l</td>
            <td>3,00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default DraftBeer;
