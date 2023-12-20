import styles from "./Socials.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
  const tar = "_blank";
  const hover = {
    scale: 1.2,
    transition: { type: "spring", stiffness: 600, damping: 10 },
  };
  return (
    <div className={styles.social}>
      <a
        href="https://in.linkedin.com/in/lakshay-babbar-5b70a7273"
        target="_blank"
      >
        <FaLinkedin className={styles.link}/>
      </a>
      <a href="https://github.com/LakshayBabbar" target="_blank">
        <FaGithub className={styles.link}/>
      </a>
      <a href="https://www.instagram.com/thelakshaybabbar/" target="_blank">
        <FaInstagram className={styles.link}/>
      </a>
    </div>
  );
};
export default Socials;
