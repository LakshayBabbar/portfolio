import { Fragment } from 'react';
import classes from './Skills.module.css';
import Skill from './Skill';

const Skills = () => {
    const data = [{
        Name: "HTML & CSS",
        progress: 90
    },
    {
        Name: "JavaScript",
        progress: 80
    },
    {
        Name: "React",
        progress: 70
    },
    {
        Name: "PHP",
        progress: 70
    },
    {
        Name: "Python",
        progress: 60
    },
    {
        Name: "SQL",
        progress: 75
    },
    {
        Name: "Canva",
        progress: 80
    },
    {
        Name: "C Language",
        progress: 90
    }];
    return (
        <Fragment>
            <div className={classes.wrapper} id='skills'>
                <div className={classes.grid_wrapper}>
                <h1>Skills</h1>
                    <div className={classes.grid_container}>
                        {data.map((prev,index) => {
                            return <Skill name={prev.Name} progress={prev.progress} key={prev.Name}/>
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Skills;
