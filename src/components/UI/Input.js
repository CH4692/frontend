import React from "react";
import classes from "./Input.module.css";

/**
 * This is an input components which contains styling and a ready usable input
 */
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
