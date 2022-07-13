import classes from "./Whiskey.module.css";

const Whiskey = () => {
  return (
    <div className={classes.whiskeyContainer}>
      <div className={classes.title}>
        <h1>Whiskeys</h1>
      </div>
      <div className={classes.whiskeyContent}>
        <div className={classes.whiskeyRow}>
          <span>Artikl</span>
          <span>Količina</span>
          <span>Cijena</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Chivas Regal 18</span>
          <span>0,03l</span>
          <span>9,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Chivas Regal 12</span>
          <span>0,03l</span>
          <span>6,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Johnnie Walker Blue Label</span>
          <span>0,03l</span>
          <span>25,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Johnnie Walker Green Label</span>
          <span>0,03l</span>
          <span>9,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Johnnie Walker Gold Label</span>
          <span>0,03l</span>
          <span>11,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Johnnie Walker Black Label</span>
          <span>0,03l</span>
          <span>6,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Johnnie Walker Red Label</span>
          <span>0,03l</span>
          <span>3,50</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Jack Daniels</span>
          <span>0,03l</span>
          <span>5,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Jack Daniels Gentleman</span>
          <span>0,03l</span>
          <span>6,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Jack Daniels Single Barell</span>
          <span>0,03l</span>
          <span>7,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Jack Daniels Honey</span>
          <span>0,03l</span>
          <span>5,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Jameson</span>
          <span>0,03l</span>
          <span>4,00</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Jim Beam</span>
          <span>0,03l</span>
          <span>4,50</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Ballantines</span>
          <span>0,03l</span>
          <span>3,50</span>
        </div>
        <div className={classes.whiskeyRow}>
          <span>Stock</span>
          <span>0,03l</span>
          <span>3,00</span>
        </div>
      </div>
    </div>
  );
};

export default Whiskey;
