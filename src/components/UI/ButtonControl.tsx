import React from "react";
import classes from "./ButtonControl.module.scss";

const ButtonControl: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default ButtonControl;
