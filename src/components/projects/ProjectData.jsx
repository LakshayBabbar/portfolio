import { CgNotes } from 'react-icons/cg';
import { BsCameraReels } from 'react-icons/bs';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';

let style={
    color: "#6011ff",
    fontSize: "4rem",
    filter: "drop-shadow(4px 4px 8px #6011ff)",
    fontWeight: "lighter"
}

export const projectData = [{
    title: "Notes Website",
    img: <CgNotes style={style} />,
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

export const CloneData = [
    {
        title: "Instagram",
        img: <BsInstagram style={style} />,
        link: "",
        g_link: ""
    }
];