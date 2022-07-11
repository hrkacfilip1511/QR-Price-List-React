import classes from "./HotDrinks.module.css";
const HotDrinks = () => {
  return (
    <div className={classes.hotDrinksContainer}>
      <div className={classes.title}>
        <h1>Topli napitci</h1>
      </div>
      <div className={classes.hotDrinksContent}>
        <div className={classes.hotDrinksRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>

        <div className={classes.hotDrinksRow}>
          <span>Kava</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.hotDrinksRow}>
          <span>Bijela kava</span>
          <span>šalica</span>
          <span>2,50</span>
        </div>
        <div className={classes.hotDrinksRow}>
          <span>Nescaffe Classic</span>
          <span>šalica</span>
          <span>2,50</span>
        </div>
        <div className={classes.hotDrinksRow}>
          <span>Nescaffe Vanilija</span>
          <span>šalica</span>
          <span>2,50</span>
        </div>
        <div className={classes.hotDrinksRow}>
          <span>Nescaffe Čokolada</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.hotDrinksRow}>
          <span>Kakao</span>
          <span>šalica</span>
          <span>2,00</span>
        </div>
        <div className={classes.hotDrinksRow}>
          <span>Vruća čokolada</span>
          <span>šalica</span>
          <span>3,50</span>
        </div>
      </div>
    </div>
  );
};
export default HotDrinks;
