import { TypeAnimation } from 'react-type-animation';
import Button from '../UI/Button';
import profileImage from '../../assets/pic.png';
import classes from './Intro.module.css';

const Intro = () => {

    return (
        <div className={classes.wrapper} data-aos="zoom-out">
            <div className={classes.intro}>
                <div className={classes.heading}><h3>Welcome to my Portfolio</h3></div>
                <div className={classes.headline}>
                    <h1>Hi! I&apos;m Lakshay Babbar,</h1>
                    <TypeAnimation
                        sequence={[
                            "Student",
                            2000,
                            "FrontEnd Dev",
                            2000,
                        ]}
                        speed={1}
                        repeat={Infinity}

                    />
                </div>
                <div className={classes.para}>
                    <p>I am a Second year computer application undergrad. I have
                        a good hand at FrontEnd. I am a enthusiastic and quick learner
                        who is always looking for opportunities to upgrade my skills.
                        Apart from this I am good at Linux.</p>
                </div>
                <a href='#contact'><Button type="button" name="Let's Connect" /></a>
            </div>
            <div className={classes.into_img}>
                <div className={classes.img}><img src={profileImage} alt="Profile pic" /></div>
                <div className={classes.shape_modal}></div>
            </div>
        </div>
    );
};
export default Intro;