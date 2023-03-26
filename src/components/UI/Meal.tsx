import React, { useState } from "react";
import classes from "./Meal.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ButtonControl from "./ButtonControl";

interface Props {
  id: number;
  missed?: string[];
  title: string;
  img: string;
  onClick: (id: number, missed?: string[]) => void;
}

const Meal: React.FC<Props> = (props) => {
  const [favourite, setFavourite] = useState<boolean>(false);
  const liked = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFavourite((prev) => !prev);
    event.stopPropagation();
    console.log(props.id, favourite);
  };

  return (
    <div
      onClick={() => props.onClick(props.id, props.missed)}
      className={classes.div}
    >
      <ButtonControl onClick={liked} className={classes.button}>
        {favourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </ButtonControl>
      <img className={classes.img} src={props.img} />
      <h1 className={classes.h1}>{props.title}</h1>
    </div>
  );
};

export default Meal;
