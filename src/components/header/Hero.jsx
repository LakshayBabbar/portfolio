import React from "react";
import styles from "./Hero.module.css";
import pic from "../../assets/pic.webp";

function Intro() {
  return (
    <div className={styles.wrapper} id="home">
      <h3>WELCOME TO MY PORTFOLIO, I'M</h3>
      <h1>LAKSHAY</h1>
      <img src={pic} alt="pic" className={styles.pic} />
    </div>
  );
}

export default Intro;
