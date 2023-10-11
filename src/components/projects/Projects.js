import Project from './Project';
import classes from './Projects.module.css'
import studio from '../../assets/Studio.png';
import codewor from '../../assets/codewor.png';
import todoApp from '../../assets/todoApp.png';

let projectData = [{
    title: "Notes Website",
    img: codewor,
    link: "https://lakshaybabbar.github.io/CodeWor/"
},
{
    title: "Studio Website",
    img: studio,
    link: "https://lakshaybabbar.github.io/Lakshay-Movies-Studio/"
},
{
    title: "ToDo-App",
    img: todoApp,
    link: "https://lakshaybabbar.github.io/Todo-App/"
}];

const Projects = () => {
    return (
        <div className={classes.wrapper}>
            <h1>Projects</h1>
            <div className={classes.grid_container}>
                {projectData.map((items, index) => {
                    return <Project title={items.title} img={items.img} link={items.link} key={index} />;
                })}
            </div>
        </div>
    );
}
export default Projects;