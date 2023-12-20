import classes from "./Footer.module.css";
import Socials from "../UI/Socials";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Lakshay Babbar</h1>
      <p>Copyright &copy; 2023 Lakshay Babbar. All rights reserved.</p>
      <Socials />
    </div>
  );
};
export default Footer;
