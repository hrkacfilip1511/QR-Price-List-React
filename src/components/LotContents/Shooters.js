import classes from "./Shooters.module.css";

const Shooters = () => {
  return (
    <div className={classes.shootersContainer}>
      <div className={classes.title}>
        <h1>Shooters</h1>
      </div>
      <div className={classes.shootersContent}>
        <div className={classes.shootersRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.shootersRow}>
          <span>Pumpkin Pie</span>
          <span>čašica</span>
          <span>4,00</span>
        </div>
        <div className={classes.shootersRow}>
          <span>Cuba Libre</span>
          <span>čašica</span>
          <span>4,00</span>
        </div>
        <div className={classes.shootersRow}>
          <span>Flaming Lamborginhi</span>
          <span>čašica</span>
          <span>4,00</span>
        </div>
        <div className={classes.shootersRow}>
          <span>B-52</span>
          <span>čašica</span>
          <span>4,00</span>
        </div>
        <div className={classes.shootersRow}>
          <span>Flaming Dr. Pepper</span>
          <span>čašica</span>
          <span>4,00</span>
        </div>
        <div className={classes.shootersRow}>
          <span>Bailey's Comet</span>
          <span>čašica</span>
          <span>4,00</span>
        </div>
        <div className={classes.shootersRow}>
          <span>Kamikaze</span>
          <span>čašica</span>
          <span>4,00</span>
        </div>
      </div>
    </div>
  );
};

export default Shooters;
