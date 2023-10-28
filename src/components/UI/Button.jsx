import classes from './Button.module.css';

const Button = ({name, type, custom_style}) => {
    return (
        <div>
            <button type={type} className={classes.button} style={custom_style}>{name}</button>
        </div>
    );
}
export default Button;