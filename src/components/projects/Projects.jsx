import Project from './Project';
import { CgNotes } from 'react-icons/cg';
import { BsCameraReels } from 'react-icons/bs';
import { RiCalendarTodoLine } from 'react-icons/ri';
import classes from './Projects.module.css';

let style={
    color: "#6011ff",
    fontSize: "4rem",
    filter: "drop-shadow(4px 4px 8px #6011ff)",
    fontWeight: "lighter"
}

let projectData = [{
    title: "Notes Website",
    img: <CgNotes style={style}/>,
    link: "https://lakshaybabbar.github.io/CodeWor/",
    g_link: "https://github.com/LakshayBabbar/CodeWor"
},
{
    title: "Studio Website",
    img: <BsCameraReels style={style} />,
    link: "https://lakshaybabbar.github.io/Lakshay-Movies-Studio/",
    g_link: "https://github.com/LakshayBabbar/Lakshay-Movies-Studio"
},
{
    title: "ToDo-List App",
    img: <RiCalendarTodoLine style={style} />,
    link: "https://lakshaybabbar.github.io/Todo-App/",
    g_link: "https://github.com/LakshayBabbar/Todo-App"
}];

const Projects = () => {
    return (
        <div className={classes.wrapper} id='projects'>
            <h1>Projects</h1>
            <div className={classes.grid_container}>
                {projectData.map((items, index) => {
                    return <Project title={items.title} img={items.img} link={items.link} g_link={items.g_link} key={index} />;
                })}
            </div>
        </div>
    );
}
export default Projects;