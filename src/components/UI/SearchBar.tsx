import classes from "./SearchBar.module.scss";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import ButtonControl from "./ButtonControl";

const SearchBar: React.FC = () => {
  return (
    <form className={classes.form}>
      <ButtonControl>
        <BsArrowLeft />
      </ButtonControl>
      <input className={classes.input} />
    </form>
  );
};

export default SearchBar;
