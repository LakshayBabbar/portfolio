import todo from '../../assets/todo.webp';
import studio from '../../assets/studio.webp';
import notes from '../../assets/notes.webp';
import amazon from '../../assets/amazon.webp';
import codeframer from '../../assets/codeframer.webp'

let style = {
  color: "#6011ff",
  fontSize: "4rem",
  filter: "drop-shadow(4px 4px 8px #6011ff)",
  fontWeight: "lighter",
};

export const projectData = [
  {
    title: "Code Editor",
    img: codeframer,
    link: "https://code-framer.vercel.app/",
    g_link: "https://github.com/LakshayBabbar/CodeFramer",
    skills: "Next Js"
  },
  {
    title: "ToDo-List App",
    img: todo,
    link: "https://lakshaybabbar.github.io/Todo-App/",
    g_link: "https://github.com/LakshayBabbar/Todo-App",
    skills: "React Js"
  },
  {
    title: "Studio Website",
    img: studio,
    link: "https://lakshaybabbar.github.io/Lakshay-Movies-Studio/",
    g_link: "https://github.com/LakshayBabbar/Lakshay-Movies-Studio",
    skills: "HTML, CSS, JS, SmtpJS"
  },
  {
    title: "Notes Website",
    img: notes,
    link: "https://lakshaybabbar.github.io/CodeWor/",
    g_link: "https://github.com/LakshayBabbar/CodeWor",
    skills: "HTML, CSS, JS, BootStrap"
  },
];

export const CloneData = [
  {
    title: "Amazon",
    img: amazon,
    link: "https://lakshaybabbar.github.io/Amazon-Clone/",
    g_link: "https://github.com/LakshayBabbar/Amazon-Clone/",
    skills: "React Js"
  },
];
