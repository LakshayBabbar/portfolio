import classes from "./Footer.module.css";
import Socials from "../UI/Socials";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Lakshay Babbar</h1>
      <p>Student at SGTBIMIT &nbsp;(IP University)</p>
      <Socials />
    </div>
  );
};
export default Footer;
