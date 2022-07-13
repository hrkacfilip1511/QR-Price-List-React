import classes from "./NonCarbonatedJuices.module.css";

const NonCarbonatedJuices = () => {
  return (
    <div className={classes.nonCarbonatedContainer}>
      <div className={classes.title}>
        <h1>Negazirani sokovi</h1>
      </div>
      <div className={classes.nonCarbonatedContent}>
        <div className={classes.nonCarbonatedRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Cedevita limun</span>
          <span>0.3l</span>
          <span>2,50</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Cedevita naranča</span>
          <span>0.3l</span>
          <span>2,50</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Cedevita bazga</span>
          <span>0.3l</span>
          <span>2,50</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Dvojni C</span>
          <span>0.33l</span>
          <span>2,50</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago ananas</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago banana</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago borovnica</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago breskva</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago jabuka</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago jagoda</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago naranča</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
        <div className={classes.nonCarbonatedRow}>
          <span>Pago limeta</span>
          <span>0.2l</span>
          <span>3,00</span>
        </div>
      </div>
    </div>
  );
};

export default NonCarbonatedJuices;
