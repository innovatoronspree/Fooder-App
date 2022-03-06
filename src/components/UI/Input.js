import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  //We can configure input type using props
  //but to keep it simple, we are not doing that here
  //When we spread the ...props.input
  //it makes sure all the key value pairs
  //are given to the input
  //like the type = "text" is added
  //Makes the input highly configurable

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
