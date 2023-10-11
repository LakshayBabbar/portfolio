import classes from './Project.module.css';
import Button from '../UI/Button';

const Project = (props) => {
    const tar= "_blank";
    return (
        <div className={classes.wrapper}>
            <div className={classes.project_img}>
                <img src={props.img} alt={props.title} />
            </div>
            <div className={classes.desc}>
                <h2>{props.title}</h2>
            </div>
            <a href={props.link} target={tar}><Button name="Check Out!" type="Button" /></a>
        </div>
    );
};
export default Project;