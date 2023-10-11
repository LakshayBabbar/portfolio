import /* classes from  */'./Navbar.css';
import insta from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/icons/close.png';
import { useState } from 'react';

const Navbar = () => {
    const tar = "_blank"
    const [toggle, setToggle] = useState("");
    const nav_toggle = () => {
        if (toggle === "") {
            setToggle("active");
        }
        else {
            setToggle("");
        }
    }

    const icons = (
        <div className='icons'>
            <a href="https://in.linkedin.com/in/lakshay-babbar-5b70a7273" target={tar}><img src={linkedin} alt="Linkedin"/></a>
            <a href="https://www.instagram.com/thelakshaybabbar/" target={tar}><img src={insta} alt="instagram"/></a>
            <a href="https://github.com/LakshayBabbar" target={tar}><img src={github} alt="github"/></a>
        </div>
    );

    return (
        <div className='wrapper'>
            <nav className={`nav ${toggle}`}>
                <div className="nav_logo">
                    <h3>Navbar</h3>
                </div>
                <div className="navbar">
                    <ul className="nav_list">
                        <li className="nav_link"><a href="./index.html" target={tar}>Home</a></li>
                        <li className="nav_link"><a href="./index.html" target={tar}>About</a></li>
                        <li className="nav_link"><a href="./index.html" target={tar}>Services</a></li>
                        <li className="nav_link"><a href="./index.html" target={tar}>Contact</a></li>
                        <li>{icons}</li>
                    </ul>
                </div>
                <div className="nav_btn">
                    <img src={menu} alt="menu-btn" name="menu-btn" onClick={nav_toggle} />
                    <img src={close} alt="close-btn" name="close-btn" onClick={nav_toggle} />
                </div>
            </nav>
        </div>
    );
};
export default Navbar;