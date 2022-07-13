import classes from "./Sweet.module.css";

const Sweet = () => {
  return (
    <div className={classes.sweetContainer}>
      <div className={classes.title}>
        <h1>Slastice</h1>
      </div>
      <div className={classes.sweetContent}>
        <div className={classes.sweetRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Kinder Bueno</span>
          <span>tanjur</span>
          <span>3,50</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Krempita</span>
          <span>tanjur</span>
          <span>3,50</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Čoko narančca</span>
          <span>tanjur</span>
          <span>3,50</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Voćna kocka</span>
          <span>tanjur</span>
          <span>3,50</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Nutella cheesecake</span>
          <span>tanjur</span>
          <span>4,50</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Baklava</span>
          <span>tanjur</span>
          <span>3,00</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Suffle</span>
          <span>tanjur</span>
          <span>5,00</span>
        </div>
        <div className={classes.sweetRow}>
          <span>Bijeli suffle</span>
          <span>tanjur</span>
          <span>5,00</span>
        </div>
      </div>
    </div>
  );
};

export default Sweet;
