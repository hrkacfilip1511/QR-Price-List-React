import classes from "./Teas.module.css";

const Teas = () => {
  return (
    <div className={classes.teasContainer}>
      <div className={classes.title}>
        <h1>Čajevi</h1>
      </div>
      <div className={classes.teasContent}>
        <div className={classes.teasRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.teasRow}>
          <span>Zeleni čaj</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.teasRow}>
          <span>Šumsko voće</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.teasRow}>
          <span>Kamilica</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.teasRow}>
          <span>Borovnica</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.teasRow}>
          <span>Čaj od mente</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.teasRow}>
          <span>Breskva</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.teasRow}>
          <span>Med</span>
          <span>1x</span>
          <span>0,50</span>
        </div>
      </div>
    </div>
  );
};

export default Teas;
