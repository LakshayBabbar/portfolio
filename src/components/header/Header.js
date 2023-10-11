import { Fragment } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import classes from './Header.module.css';

const Header = () => {

    return (
        <Fragment>
            <div className={classes.wrapper}>
                <Navbar />
                <Intro />
            </div>
        </Fragment>

    );
};
export default Header;