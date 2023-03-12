import React from "react";
import classes from "./SmallIcons.module.scss";
import { Meals } from "../../models/interfaces";

interface Props extends Meals {
  onClick?: (sort: string, type: string) => void;
}
const SmallIcons: React.FC<Props> = (props) => {
  return (
    <li
      className={classes.li}
      onClick={() => props.onClick!(props.title, props.type)}
    >
      {props.children}
    </li>
  );
};

export default SmallIcons;
