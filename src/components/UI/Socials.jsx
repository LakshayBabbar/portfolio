import classes from "./Socials.module.css";
import linkedin from "../../assets/icons/linkedin.png";
import insta from "../../assets/icons/instagram.png";
import github from "../../assets/icons/github.png";
import { motion } from "framer-motion";

const Socials = () => {
  const tar = "_blank";
  const hover = {
    scale: 1.2,
    transition: { type: "spring", stiffness: 600, damping: 10 },
  };
  return (
    <div className={classes.social}>
      <motion.a
        whileHover={hover}
        href="https://in.linkedin.com/in/lakshay-babbar-5b70a7273"
        target={tar}
      >
        <img src={linkedin} alt="Linkedin" />
      </motion.a>
      <motion.a
        whileHover={hover}
        href="https://www.instagram.com/thelakshaybabbar/"
        target={tar}
      >
        <img src={insta} alt="Instagram" />
      </motion.a>
      <motion.a
        whileHover={hover}
        href="https://github.com/LakshayBabbar"
        target={tar}
      >
        <img src={github} alt="github" />
      </motion.a>
    </div>
  );
};
export default Socials;
