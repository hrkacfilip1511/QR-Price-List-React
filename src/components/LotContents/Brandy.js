import classes from "./Brandy.module.css";

const Brandy = () => {
  return (
    <div className={classes.brandyContainer}>
      <div className={classes.title}>
        <h1>Rakije i Likeri</h1>
      </div>
      <div className={classes.brandyContent}>
        <div className={classes.brandyRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Loza</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Travarica</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Šljivovica</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Medovača</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Višnja</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Viljamovka</span>
          <span>0,03l</span>
          <span>5,00</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Pelinkovac</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Kruškovac</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Orahovac</span>
          <span>0,03l</span>
          <span>2,50</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Sambuca</span>
          <span>0,03l</span>
          <span>5,00</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Underberga</span>
          <span>0,03l</span>
          <span>4,00</span>
        </div>
        <div className={classes.brandyRow}>
          <span>Jagermeister</span>
          <span>0,03l</span>
          <span>4,00</span>
        </div>
      </div>
    </div>
  );
};

export default Brandy;
