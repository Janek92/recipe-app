import React from "react";
import classes from "./MealTypeCard.module.scss";

interface Props {
  img: string;
  title: string;
  onClick?: () => void;
}

const MealTypeCard: React.FC<Props> = (props) => {
  return (
    <div
      className={classes.div}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  );
};

export default MealTypeCard;
