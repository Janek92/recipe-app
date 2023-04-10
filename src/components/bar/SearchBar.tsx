import React, { useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import ButtonControl from "~/components/UI/ButtonControl";

import classes from "./SearchBar.module.scss";

interface Props {
  onCloseInput?: () => void;
  isForDesktop: boolean;
}

const SearchBar: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function hideInputHandler() {
    props.onCloseInput!();
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredients = inputRef.current!.value;
    const ingredientsPrepared = ingredients.split(/[,\s]+/).join(",+");
    inputRef.current!.value = "";
    // const state: string = "ingredients";
    const state: string = `findByIngredients?ingredients`;
    navigate(`/${ingredientsPrepared}`, { state });
    hideInputHandler();
  };

  return (
    <div
      className={
        props.isForDesktop ? `${classes.div} ${classes.desktop}` : classes.div
      }
    >
      <ButtonControl className={classes.return} onClick={hideInputHandler}>
        <BsArrowLeft />
      </ButtonControl>
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          ref={inputRef}
          placeholder="type your ingredients"
          className={classes.input}
        />
      </form>
    </div>
  );
};

export default SearchBar;
