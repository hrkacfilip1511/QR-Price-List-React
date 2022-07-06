import caffeLogo from "../../assets/caffeLogo.png";
import classes from "./WelcomeSection.module.css";
const WelcomeSection = () => {
  return (
    <div className={classes.welcomeText}>
      <div>
        <img src={caffeLogo} alt="logo" className={classes.logo} />
      </div>
      <div className={classes.paragraphs}>
        <p className={classes.firstParagraph}>
          Dobrodošli u Caffe & Lounge Bar
        </p>
        <p className={classes.secondParagraph}>
          Skeniranjem QR code-a sa stola, dolazite na naš online cjenik. U
          lijevom gornjem kutu kliknite za pretraživanje kategorija.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
