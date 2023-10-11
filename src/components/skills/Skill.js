import classes from './Skill.module.css';


const Skill = (props) => {
    const progressBar = (360 * props.progress / 100).toString();
    const bar = `conic-gradient(var(--shadow) ${progressBar}deg, #fefefe 0deg)`;
    return (
        <div className={classes.wrapper}>
            <div className={classes.outer} style={{ background: bar }}>
                <div className={classes.inner}>
                    <h3>{props.progress + "%"}</h3>
                </div>
            </div>
            <h3>{props.name}</h3>
        </div>
    );
}
export default Skill;