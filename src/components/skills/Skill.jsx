import classes from "./Skill.module.css";
import { motion } from "framer-motion";

const Skill = ({ progress, name }) => {
  const progressBar = ((360 * progress) / 100).toString();
  const bar = `conic-gradient(var(--shadow) ${progressBar}deg, #fefefe 0deg)`;
  const variants = {
    init: { opacity: 0, scale: 0 },
    InView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        scale: { type: "spring", stiffness: 250, damping: 20 },
      },
    },
  };

  return (
    <motion.div
      className={classes.wrapper}
      variants={variants}
      initial="init"
      whileInView="InView"
    >
      <motion.div
        className={classes.outer}
        style={{ background: bar }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: 360,
          borderRadius: "100%",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className={classes.inner}>
          <h3>{progress + "%"}</h3>
        </div>
      </motion.div>
      <h3>{name}</h3>
    </motion.div>
  );
};
export default Skill;
