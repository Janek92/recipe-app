import React from "react";

import classes from "./ButtonControl.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const ButtonControl: React.FC<Props> = (props) => {
  const classNames = props.className
    ? `${classes.button} ${props.className}`
    : classes.button;
  return (
    <button onClick={props.onClick} className={classNames}>
      {props.children}
    </button>
  );
};

export default ButtonControl;
