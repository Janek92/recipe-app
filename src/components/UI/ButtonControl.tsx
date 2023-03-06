import React from "react";
import classes from "./ButtonControl.module.scss";

const ButtonControl: React.FC<{
  children?: React.ReactNode;
  onClick?: () => void;
}> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.children}
    </button>
  );
};

export default ButtonControl;
