import React from "react";
import logo from "../../assets/Let's_eat.png";
import classes from "./MainBar.module.scss";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import ButtonControl from "./ButtonControl";
import SearchBar from "./SearchBar";

const MainBar: React.FC = () => {
  return (
    <nav className={classes["nav-bar"]}>
      <button className={classes["button-logo"]}>
        <img className={classes.logo} src={logo}></img>
      </button>
      <div className={classes.menu}>
        <ButtonControl>
          <BsSearch />
        </ButtonControl>
        <ButtonControl>
          <BsFillHeartFill />
        </ButtonControl>
      </div>
      {/* <SearchBar /> */}
    </nav>
  );
};

export default MainBar;
