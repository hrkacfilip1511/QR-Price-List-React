import classes from "./Gin.module.css";

const Gin = () => {
  return (
    <div className={classes.ginContainer}>
      <div className={classes.title}>
        <h1>Gin</h1>
      </div>
      <div className={classes.ginContent}>
        <div className={classes.ginRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.ginRow}>
          <span>Gin Mare</span>
          <span>0,03l</span>
          <span>8,00</span>
        </div>
        <div className={classes.ginRow}>
          <span>Robymarton Gin</span>
          <span>0,03l</span>
          <span>15,00</span>
        </div>
        <div className={classes.ginRow}>
          <span>Williemas GB Gin</span>
          <span>0,03l</span>
          <span>7,00</span>
        </div>
        <div className={classes.ginRow}>
          <span>Scapegrace</span>
          <span>0,03l</span>
          <span>6,50</span>
        </div>
        <div className={classes.ginRow}>
          <span>Hendricks Gin</span>
          <span>0,03l</span>
          <span>5,00</span>
        </div>
        <div className={classes.ginRow}>
          <span>Needle Gin</span>
          <span>0,03l</span>
          <span>4,00</span>
        </div>
      </div>
    </div>
  );
};

export default Gin;
