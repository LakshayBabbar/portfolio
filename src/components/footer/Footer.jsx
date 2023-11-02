import classes from "./Footer.module.css";
import Socials from "../UI/Socials";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className={classes.wrapper}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.2,
          scale: { type: "spring", stiffness: 100, damping: 18 },
        },
      }}
    >
      <h1>Lakshay Babbar</h1>
      <p>Student at SGTBIMIT &nbsp;(IP University)</p>
      <Socials />
    </motion.div>
  );
};
export default Footer;
