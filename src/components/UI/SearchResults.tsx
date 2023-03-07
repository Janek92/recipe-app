import React from "react";
import classes from "./SearchResults.module.scss";
import ButtonControl from "./ButtonControl";
import { GrClose } from "react-icons/gr";

// interface Props {}

const SearchResults: React.FC = () => {
  return (
    <div className={classes.div}>
      <div className={classes.title}>
        <h1 className={classes.h1}>Chinese kitchen</h1>
        <ButtonControl className={classes.button}>Filters</ButtonControl>
        <ButtonControl className={classes.close}>
          <GrClose />
        </ButtonControl>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum
      at minus, dicta placeat nisi harum porro ut ipsa consequatur. Ad vero,
      fuga debitis ducimus delectus dignissimos sed illum explicabo! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Voluptate nostrum at minus,
      dicta placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Voluptate nostrum at minus, dicta
      placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Voluptate nostrum at minus, dicta
      placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Voluptate nostrum at minus, dicta
      placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Voluptate nostrum at minus, dicta
      placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Voluptate nostrum at minus, dicta
      placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Voluptate nostrum at minus, dicta
      placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Voluptate nostrum at minus, dicta
      placeat nisi harum porro ut ipsa consequatur. Ad vero, fuga debitis
      ducimus delectus dignissimos sed illum explicabo!{" "}
    </div>
  );
};

export default SearchResults;
