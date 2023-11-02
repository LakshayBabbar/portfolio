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
          All
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

      {active === "all" ? (
        <div className={classes.grid_container}>
          {projectData.map((items, index) => {
            return (
              <Project
                title={items.title}
                img={items.img}
                link={items.link}
                g_link={items.g_link}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        <div className={classes.grid_container}>
          {CloneData.map((items, index) => {
            return (
              <Project
                title={items.title}
                img={items.img}
                link={items.link}
                g_link={items.g_link}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Projects;
