import classes from "./SearchBar.module.scss";
import React, { useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import ButtonControl from "../UI/ButtonControl";
import { useNavigate } from "react-router-dom";

interface Props {
  onCloseInput: () => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const hideInputHandler = () => {
    props.onCloseInput();
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredients = inputRef.current!.value;
    const ingredientsPepared = ingredients.split(/[,\s]+/).join(",+");
    inputRef.current!.value = "";
    hideInputHandler();
    const state: string = "ingredients";
    navigate(`/${ingredientsPepared}`, { state });
  };

  return (
    <div className={classes.div}>
      <ButtonControl className={classes.return} onClick={hideInputHandler}>
        <BsArrowLeft />
      </ButtonControl>
      <form onSubmit={submitHandler} className={classes.form}>
        <input ref={inputRef} className={classes.input} />
      </form>
    </div>
  );
};

export default SearchBar;
