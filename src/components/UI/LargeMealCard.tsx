import React from "react";

import { Meals } from "~/models/meals";

import classes from "./LargeMealCard.module.scss";

interface Props extends Meals {
  onClick?: (sort: string, type: string) => void;
}

const LargeMealCard: React.FC<Props> = (props) => {
  return (
    <div
      className={classes.div}
      // style={{ backgroundImage: `url(${props.img})` }}
      onClick={() => props.onClick!(props.title, props.type)}
    >
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  );
};

export default LargeMealCard;
