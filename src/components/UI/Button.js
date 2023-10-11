import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div>
            <button type={props.type} className={classes.button}>{props.name}</button>
        </div>
    );
}
export default Button;