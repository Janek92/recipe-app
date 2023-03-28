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
  isLiked: () => boolean;
}

const Meal: React.FC<Props> = (props) => {
  const [favourite, setFavourite] = useState<boolean>(props.isLiked);

  const addFavouriteToLS = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFavourite((prev) => !prev);
    // console.log(props.id, props.title, props.img, favourite);
    if (favourite === false) {
      localStorage.setItem(
        props.title,
        JSON.stringify({ id: props.id, title: props.title, img: props.img })
      );
    } else {
      localStorage.removeItem(props.title);
    }
    event.stopPropagation();
  };

  return (
    <div
      onClick={() => props.onClick(props.id, props.missed)}
      className={classes.div}
    >
      <ButtonControl onClick={addFavouriteToLS} className={classes.button}>
        {favourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </ButtonControl>
      <img className={classes.img} src={props.img} />
      <h1 className={classes.h1}>{props.title}</h1>
    </div>
  );
};

export default Meal;
