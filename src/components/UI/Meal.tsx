import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { LocalStorageKeyValue } from "~/models/localStorageKeyValue";

import ButtonControl from "./ButtonControl";
import classes from "./Meal.module.scss";

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

  function addFavouriteToLS(event: React.MouseEvent<HTMLButtonElement>) {
    if (favourite === false) {
      const keyValue: LocalStorageKeyValue = {
        id: props.id,
        title: props.title,
        img: props.img,
      };
      localStorage.setItem(props.title, JSON.stringify(keyValue));
    } else {
      localStorage.removeItem(props.title);
    }
    setFavourite((prev) => !prev);
    event.stopPropagation();
  }

  return (
    <div
      onClick={() => props.onClick(props.id, props.missed)}
      className={classes.div}
    >
      <ButtonControl onClick={addFavouriteToLS} className={classes.button}>
        {favourite ? (
          <AiFillHeart style={{ color: "red" }} />
        ) : (
          <AiOutlineHeart />
        )}
      </ButtonControl>
      <LazyLoadImage className={classes.img} effect="blur" src={props.img} />
      <h1 className={classes.h1}>{props.title}</h1>
    </div>
  );
};

export default Meal;
