import { Fragment } from 'react';
import classes from './Skills.module.css';
import TopSkills from './TopSkills';
import Skill from './Skill';

const Skills = () => {

    const top_skills = [{
        Name: "HTML & CSS",
        progress: 90
    }, {
        Name: "JavaScript",
        progress: 80
    }, {
        Name: "React",
        progress: 70
    }];

    const data = [
        {
            Name: "SQL",
            progress: 75
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
            Name: "C Language",
            progress: 90
        },
        {
            Name: "Canva",
            progress: 80
        },
        {
            Name: "MS Office",
            progress: 95
        }
    ];

    return (
        <Fragment>
            <div className={classes.wrapper} id='skills'>
                <h1>Top Skills</h1>
                <div className={classes.top_skills_wrapper}>
                    {top_skills.map((items) => {
                        return <TopSkills name={items.Name} progress={items.progress} key={items.Name} />
                    })}
                </div>
                <h1>Skills</h1>
                <div className={classes.grid_container}>
                    {data.map((prev) => {
                        return <Skill name={prev.Name} progress={prev.progress} key={prev.Name} />
                    })}
                </div>
            </div>
        </Fragment>
    );
};
export default Skills;
