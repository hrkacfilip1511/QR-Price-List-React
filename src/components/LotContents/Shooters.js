import classes from "./Shooters.module.css";
const Shooters = () => {
  return (
    <div className={classes.shooters}>
      <div className={classes.title}>
        <h1>Shooters</h1>
      </div>
      <div className={classes.contentForShooters}>
        <table className={classes.shootersTable}>
          <tr>
            <td>Artikl</td>
            <td>Količina</td>
            <td>Cijena</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Pumpkin Pie</td>
            <td>čašica</td>
            <td>7,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Cuba Libre</td>
            <td>čašica</td>
            <td>4,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}> Flaming Lamborghini</td>
            <td>čašica</td>
            <td>4,50</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>B-52</td>
            <td>čašica</td>
            <td>4,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Flaming Dr. Pepper</td>
            <td>čašica</td>
            <td>4,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Bailey’s Comet</td>
            <td>čašica</td>
            <td>4,00</td>
          </tr>
          <tr>
            <td className={classes.subtitles}>Kamikaze</td>
            <td>čašica</td>
            <td>4,00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Shooters;
