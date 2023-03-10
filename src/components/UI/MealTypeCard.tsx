import React from "react";
import classes from "./MealTypeCard.module.scss";

interface Props {
  img: string;
  title: string;
  onClick?: (type: string) => void;
}

const MealTypeCard: React.FC<Props> = (props) => {
  return (
    <div
      className={classes.div}
      style={{ backgroundImage: `url(${props.img})` }}
      onClick={() => props.onClick!(props.title)}
    >
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  );
};

export default MealTypeCard;
