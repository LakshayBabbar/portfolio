import styles from "./about.module.css";
import { TypeAnimation } from "react-type-animation";
import Button from "../UI/Button";
import Socials from "../UI/Socials";
import pic from "../../assets/pic2.jpg";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <div className={styles.wrapper}>
        <h1>
          About <span>Me</span>
        </h1>
        <h3>
          <TypeAnimation
            sequence={["Student", 2000, "FrontEnd Developer", 2000]}
            speed={1}
            repeat={Infinity}
          />
        </h3>
        <p>
          I am a Second year computer application undergrad. I have a good hand
          at FrontEnd. I am a enthusiastic and quick learner who is always
          looking for opportunities to upgrade my skills. Apart from this I am
          good at Linux.
        </p>
        <Socials />
        <a href="https://drive.google.com/file/d/17_taSZW8UtO_uXsYJ9AndCcrQC44O5Pn/view?usp=drivesdk" target="_blank">
          <Button type="button" name="Resume" />
        </a>
      </div>
      <img src={pic} alt="pic" className={styles.img} />
    </section>
  );
}
