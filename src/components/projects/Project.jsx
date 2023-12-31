import classes from "./Project.module.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Project = (props) => {
  const tar = "_blank";
  return (
    <motion.div
      className={classes.wrapper}
      whileHover={{skew: 4}} 
      initial={{opacity: 0, scale: 0}}
      whileInView={{scale: 1, opacity: 1}}
      transition={{type: "spring", stiffness: 150, damping: 15}}
    >
      <div className={classes.project_img}>
        <img src={props.img} alt="projects" />
      </div>
      <div className={classes.desc}>
        <h2>{props.title}</h2>
        <p>{props.skills}</p>
        <div className={classes.link}>
          <a href={props.link} target={tar}>
            Live Preview
          </a>
          <a href={props.g_link} target={tar}>
            {<FaGithub className={classes.ico} />}
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Project;
