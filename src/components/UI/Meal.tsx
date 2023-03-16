import React, { useState } from "react";
import classes from "./Meal.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ButtonControl from "./ButtonControl";

interface Props {
  title: string;
  img: string;
}

const Meal: React.FC<Props> = (props) => {
  const [favourite, setFavourite] = useState<boolean>(false);
  const liked = () => {
    setFavourite((prev) => !prev);
  };

  return (
    <div className={classes.div}>
      <ButtonControl onClick={liked} className={classes.button}>
        {favourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </ButtonControl>
      <img className={classes.img} src={props.img} />
      <h1 className={classes.h1}>{props.title}</h1>
    </div>
  );
};

export default Meal;
