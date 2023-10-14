import classes from './TopSkills.module.css';

const TopSkills = (props) => {
    return (
            <div className={classes.wrapper} data-aos="zoom-in">
                <div className={classes.details}>
                    <h5>{props.name}</h5>
                    <span>{props.progress}%</span>
                </div>
                <div className={classes.outer}>
                    <div className={classes.inner} style={{ width: `${props.progress}%` }}></div>
                </div>
            </div>
    );
};
export default TopSkills;