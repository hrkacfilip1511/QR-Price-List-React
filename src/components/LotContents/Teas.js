import classes from "./Teas.module.css";

const Teas = () => {
  return (
    <div className={classes.teas}>
      <div className={classes.title}>
        <h1>Čajevi</h1>
      </div>
      <div className={classes.contentForTea}>
        <h3>Proizvođač</h3>
        <table className={classes.teasTable}>
          <tr>
            <td>Artikl</td>
            <td>Količina</td>
            <td>Cijena</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Zeleni Čaj</td>
            <td>šalica</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Šumsko voće</td>
            <td>šalica</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Kamilica</td>
            <td>šalica</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Borovnica</td>
            <td>šalica</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Čaj od mente</td>
            <td>šalica</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Breskva</td>
            <td>šalica</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Med</td>
            <td>1x</td>
            <td>0,50</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Teas;
