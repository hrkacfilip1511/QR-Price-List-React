import classes from "./RoseWines.module.css";

const RoseWine = () => {
  return (
    <div className={classes.roseWineContainer}>
      <div className={classes.title}>
        <h1>Rose Vina</h1>
      </div>
      <div className={classes.roseWineContent}>
        <div className={classes.roseWineRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.roseWineRow}>
          <span>Nika Rose</span>
          <span>0.7l</span>
          <span>35,00</span>
        </div>
        <div className={classes.roseWineRow}>
          <span>Andrija Rose</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.roseWineRow}>
          <span>CZ Rose</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
        <div className={classes.roseWineRow}>
          <span>Palm Rose</span>
          <span>0.7l</span>
          <span>60,00</span>
        </div>
        <div className={classes.roseWineRow}>
          <span>Terra Rosa Laguna</span>
          <span>0.7l</span>
          <span>30,00</span>
        </div>
      </div>
    </div>
  );
};

export default RoseWine;
