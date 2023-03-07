import classes from "./SearchBar.module.scss";
import React, { useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import ButtonControl from "../UI/ButtonControl";

interface Props {
  onCloseInput: () => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const hideInputHandler = () => {
    props.onCloseInput();
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredients = inputRef.current!.value;
    const ingredientsPepared = ingredients.split(",").join(",+");
    console.log(ingredientsPepared);
    inputRef.current!.value = "";
    hideInputHandler();
  };

  return (
    <div className={classes.div}>
      <ButtonControl onClick={hideInputHandler}>
        <BsArrowLeft />
      </ButtonControl>
      <form onSubmit={submitHandler} className={classes.form}>
        <input ref={inputRef} className={classes.input} />
      </form>
    </div>
  );
};

export default SearchBar;
