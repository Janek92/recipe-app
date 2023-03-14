import React from "react";
import classes from "./SmallIcons.module.scss";
import { Meals } from "../../models/meals";

interface Props extends Meals {
  onClick?: (sort: string, type: string) => void;
}
const SmallIcons: React.FC<Props> = (props) => {
  return (
    <li
      className={classes.li}
      onClick={() => props.onClick!(props.title, props.type)}
    >
      <p>{props.children}</p>
    </li>
  );
};

export default SmallIcons;
