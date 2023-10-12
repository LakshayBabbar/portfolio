import classes from './Project.module.css';
import github from '../../assets/icons/github.png';

const Project = (props) => {
    const tar= "_blank";
    return (
        <div className={classes.wrapper}>
            <div className={classes.project_img}>
                <img src={props.img} alt={props.title} />
            </div>
            <div className={classes.desc}>
                <p>{props.title}</p>
            </div>
            <div className={classes.link}>
                <a href={props.link} target={tar}>Visit</a>
                <a href={props.g_link} target={tar}><img src={github} alt="Github Link"/></a>
            </div>
        </div>
    );
};
export default Project;