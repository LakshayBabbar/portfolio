import classes from './Socials.module.css';
import linkedin from '../../assets/icons/linkedin.png';
import insta from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';

const Socials = () => {
    const tar = "_blank"
    return (
        <div className={classes.social}>
            <a href="https://in.linkedin.com/in/lakshay-babbar-5b70a7273" target={tar}><img src={linkedin} alt='Linkedin' /></a>
            <a href="https://www.instagram.com/thelakshaybabbar/" target={tar}><img src={insta} alt='Instagram' /></a>
            <a href="https://github.com/LakshayBabbar" target={tar}><img src={github} alt='github' /></a>
        </div>
    );
};
export default Socials;