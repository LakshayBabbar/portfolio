import classes from "./TopSkills.module.css";
import { motion } from "framer-motion";

const TopSkills = (props) => {
  const adjust = {
    margin: `0 ${98 - props.progress}% 0 0`,
  };
  return (
    <motion.div
      className={classes.wrapper}
      initial={{scale: 0 }}
      whileInView={{
        scale: 1,
        transition: {
          duration: 0.4,
          scale: { type: "spring", stiffness: 300, damping: 20 },
        },
      }}
    >
      <div className={classes.details}>
        <h5>{props.name}</h5>
        <span style={adjust}>{props.progress}%</span>
      </div>
      <div className={classes.outer}>
        <div
          className={classes.inner}
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
};
export default TopSkills;
