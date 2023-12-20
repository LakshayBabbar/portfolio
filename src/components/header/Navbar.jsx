import "./Navbar.css";
import pic from "../../assets/pic.webp";
import Socials from "../UI/Socials";
import menu from "../../assets/icons/menu.png";
import close from "../../assets/icons/close.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState("");
  const nav_toggle = () => {
    if (toggle === "") {
      setToggle("active");
    } else {
      setToggle("");
    }
  };

  return (
    <div className="wrapper">
      <nav className={`nav ${toggle}`}>
        <div className="nav_logo">
          <h3>Lakshay</h3>
        </div>
        <motion.div
          className="navbar"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
        >
          <ul className="nav_list">
            <li>
              <div className="profile">
                <img src={pic} alt="profile" />
                <h4>Lakshay Babbar</h4>
              </div>
            </li>
            <li className="nav_link">
              <a href="#home" onClick={nav_toggle}>
                Home
              </a>
            </li>
            <li className="nav_link">
              <a href="#about" onClick={nav_toggle}>
                About
              </a>
            </li>
            <li className="nav_link">
              <a href="#skills" onClick={nav_toggle}>
                Skills
              </a>
            </li>
            <li className="nav_link">
              <a href="#projects" onClick={nav_toggle}>
                Projects
              </a>
            </li>
            <li className="nav_link">
              <a href="#contact" onClick={nav_toggle}>
                Contact
              </a>
            </li>
          </ul>
          <div className="socials">
            <Socials />
          </div>
        </motion.div>
        <div className="nav_btn">
          <img src={menu} alt="menu-btn" name="menu-btn" onClick={nav_toggle} />
          <img
            src={close}
            alt="close-btn"
            name="close-btn"
            onClick={nav_toggle}
          />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
