import classes from "./Project.module.css";
import { motion } from "framer-motion";
import github from "../../assets/icons/github.png";

const Project = (props) => {
  const tar = "_blank";
  const variants = {
    init: { scale: 0, rotate: 60 },
    InView: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    Hover: { skew: 5, scale: 1.05 },
  };
  return (
    <motion.div
      className={classes.wrapper}
      variants={variants}
      initial="init"
      whileInView="InView"
      whileHover="Hover"
    >
      <div className={classes.project_ico}>{props.img}</div>
      <div className={classes.desc}>
        <p>{props.title}</p>
      </div>
      <div className={classes.link}>
        <a href={props.link} target={tar}>
          Visit
        </a>
        <a href={props.g_link} target={tar}>
          <img src={github} alt="Github Link" />
        </a>
      </div>
    </motion.div>
  );
};
export default Project;
