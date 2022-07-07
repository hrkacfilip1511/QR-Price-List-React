import classes from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.socialMedia}>
        <a href="#">
          <FaFacebook className={classes.facebook} />
        </a>
        <a href="#">
          <FaInstagram className={classes.instagram} />
        </a>
        <a href="#">
          <FaTiktok className={classes.tikTok} />
        </a>
      </div>
      <div className={classes.emptyLine}></div>
      <div className={classes.footerText}>
        <p>&copy; Copyright: Caffe & Lounge Bar. All rights reserved.</p>
        <p>Designed by Filip Hrkać</p>
      </div>
    </div>
  );
};
export default Footer;
