import classes from "./FreshJuices.module.css";

const FreshJuices = () => {
  return (
    <div className={classes.freshContainer}>
      <div className={classes.title}>
        <h1>Prirodni cijeđeni sokovi</h1>
      </div>
      <div className={classes.freshContent}>
        <div className={classes.freshRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.freshRow}>
          <span>Naranča</span>
          <span>0.3l</span>
          <span>3,50</span>
        </div>
        <div className={classes.freshRow}>
          <span>Limunada</span>
          <span>0.3l</span>
          <span>3,00</span>
        </div>
        <div className={classes.freshRow}>
          <span>Mix limun naranča</span>
          <span>0.3l</span>
          <span>3,50</span>
        </div>
        <div className={classes.freshRow}>
          <span>Jabuka</span>
          <span>0.3l</span>
          <span>3,50</span>
        </div>
        <div className={classes.freshRow}>
          <span>Mix ananas naranča limun</span>
          <span>0.3l</span>
          <span>5,00</span>
        </div>
      </div>
    </div>
  );
};

export default FreshJuices;
