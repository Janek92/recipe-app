import React, { useState } from "react";
import logo from "../../assets/Let's_eat.png";
import classes from "./MainBar.module.scss";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import ButtonControl from "../UI/ButtonControl";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const MainBar: React.FC = () => {
  const [showInputSearch, setShowInputSearch] = useState<boolean>(false);
  const navigate = useNavigate();

  const showInputHandler = () => {
    setShowInputSearch((prev) => !prev);
  };

  return (
    <nav className={classes["nav-bar"]}>
      {showInputSearch ? (
        <SearchBar onCloseInput={showInputHandler} />
      ) : (
        <>
          <button
            onClick={() => navigate("/")}
            className={classes["button-logo"]}
          >
            <img className={classes.logo} src={logo}></img>
          </button>
          <div className={classes.menu}>
            <ButtonControl onClick={showInputHandler}>
              <BsSearch />
            </ButtonControl>
            <ButtonControl>
              <BsFillHeartFill />
            </ButtonControl>
          </div>
        </>
      )}
    </nav>
  );
};

export default MainBar;
