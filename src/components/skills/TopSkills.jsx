import classes from './TopSkills.module.css';

const TopSkills = (props) => {
    const adjust = {
        margin: `0 ${98 - props.progress}% 0 0`
    };
    return (
            <div className={classes.wrapper} data-aos="zoom-in">
                <div className={classes.details}>
                    <h5>{props.name}</h5>
                    <span style={adjust}>{props.progress}%</span>
                </div>
                <div className={classes.outer}>
                    <div className={classes.inner} style={{ width: `${props.progress}%` }}></div>
                </div>
            </div>
    );
};
export default TopSkills;