import React from "react";

import { Meals } from "~/models/meals";

import classes from "./MealTypeCard.module.scss";
interface Props extends Meals {
  onClick?: (sort: string, type: string) => void;
}

const MealTypeCard: React.FC<Props> = (props) => {
  return (
    <div
      className={classes.div}
      style={{ backgroundImage: `url(${props.img})` }}
      onClick={() => props.onClick!(props.title, props.type)}
    >
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  );
};

export default MealTypeCard;
