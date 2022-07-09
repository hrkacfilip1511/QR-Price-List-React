import classes from "./HotDrinks.module.css";
const HotDrinks = () => {
  return (
    <div className={classes.hotDrinks}>
      <div className={classes.title}>
        <h1>Topli napitci</h1>
      </div>
      <div className={classes.contentForCoffe}>
        <h3>Proizvođač</h3>
        <table className={classes.hotDrinksTable}>
          <tr>
            <td>Artikl</td>
            <td>Količina</td>
            <td>Cijena</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Kava</td>
            <td>šalica</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Bijela Kava</td>
            <td>šalica</td>
            <td>2,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Nescaffe Classic</td>
            <td>0,3l</td>
            <td>2,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Nescaffe Vanilija</td>
            <td>0,3l</td>
            <td>2,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Nescaffe Čokolada</td>
            <td>šalica</td>
            <td>2,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Kakao</td>
            <td>0,3l</td>
            <td>2,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Vruća Čokolada</td>
            <td>0,3l</td>
            <td>3,50</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default HotDrinks;
