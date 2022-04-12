import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${props.className} ${classes.button}`}
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
