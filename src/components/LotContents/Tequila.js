import classes from "./Tequila.module.css";

const Tequila = () => {
  return (
    <div className={classes.tequilaContainer}>
      <div className={classes.title}>
        <h1>Tekila</h1>
      </div>
      <div className={classes.tequilaContent}>
        <div className={classes.tequilaRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.tequilaRow}>
          <span>Black Fire</span>
          <span>0,03l</span>
          <span>5,00</span>
        </div>
        <div className={classes.tequilaRow}>
          <span>Olmeca Silver</span>
          <span>0,03l</span>
          <span>4,00</span>
        </div>
        <div className={classes.tequilaRow}>
          <span>Olmeca Gold</span>
          <span>0,03l</span>
          <span>4,00</span>
        </div>
      </div>
    </div>
  );
};

export default Tequila;
