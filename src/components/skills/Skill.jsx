import classes from "./Skill.module.css";
import { motion } from "framer-motion";

const Skill = ({ progress, name }) => {
  const progressBar = ((360 * progress) / 100).toString();
  const bar = `conic-gradient(var(--shadow) ${progressBar}deg, #fefefe 0deg)`;

  return (
    <motion.div
      className={classes.wrapper}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        scale: [1.2, 1],
        opacity: 1,
        transition: { scale: { type: "spring", stiffness: 300, damping: 10, mass: 1 } },
      }}
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
