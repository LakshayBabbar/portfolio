import Project from "./Project";
import classes from "./Projects.module.css";
import { useEffect, useState } from "react";
import { projectData, CloneData } from "./ProjectData";
import { motion } from "framer-motion";

const Projects = () => {
  const [active, setActive] = useState("all");
  const [allStyle, setAllStyle] = useState({});
  const [cloneStyle, setCloneStyle] = useState({});
  useEffect(() => {
    const style = {
      background: "var(--shadow)",
    };
    if (active === "all") {
      setAllStyle(style);
      setCloneStyle({});
    } else {
      setAllStyle({});
      setCloneStyle(style);
    }
  }, [active]);

  let data = active === "all" ? projectData : CloneData;

  return (
    <div className={classes.wrapper} id="projects">
      <h1>Projects</h1>
      <div className={classes.switch_bar}>
        <motion.button
          whileTap={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
          onClick={() => setActive("all")}
          className={classes.btnSwitcher}
          style={allStyle}
        >
          Top
        </motion.button>
        <motion.button
          whileTap={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
          onClick={() => setActive("clone")}
          className={classes.btnSwitcher}
          style={cloneStyle}
        >
          Clones
        </motion.button>
      </div>
      <motion.div className={classes.grid_container}>
          {data.map((items) => {
            return (
              <Project
                title={items.title}
                img={items.img}
                link={items.link}
                g_link={items.g_link}
                skills={items.skills}
                key={Math.random()}
              />
            );
          })}
      </motion.div>
    </div>
  );
};
export default Projects;
