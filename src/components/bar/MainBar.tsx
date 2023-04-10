import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";

import logo from "~/assets/taste-it-gif.gif";
import ButtonControl from "~/components/UI/ButtonControl";

import SearchBar from "./SearchBar";
import classes from "./MainBar.module.scss";

const MainBar: React.FC = () => {
  const [showInputSearch, setShowInputSearch] = useState<boolean>(false);
  const navigate = useNavigate();

  const showInputHandler = useCallback(() => {
    setShowInputSearch((prev) => !prev);
  }, []);

  return (
    <nav className={classes.nav}>
      {showInputSearch ? (
        <SearchBar isForDesktop={false} onCloseInput={showInputHandler} />
      ) : (
        <>
          <button
            onClick={() => navigate("/")}
            className={classes["button-logo"]}
          >
            <img className={classes.logo} src={logo}></img>
          </button>
          <SearchBar isForDesktop={true} />
          <div className={classes.menu}>
            <ButtonControl
              className={classes["show-menu-button"]}
              onClick={showInputHandler}
            >
              <BsSearch />
            </ButtonControl>
            <ButtonControl onClick={() => navigate("/favourites")}>
              <BsFillHeartFill />
            </ButtonControl>
          </div>
        </>
      )}
    </nav>
  );
};

export default MainBar;
