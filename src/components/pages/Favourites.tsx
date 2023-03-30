import React, { useEffect } from "react";
import classes from "./Favourites.module.scss";
import Meal from "../UI/Meal";
import { useNavigate } from "react-router-dom";
import { LocalStorageKeyValue } from "../../models/localStorageKeyValue";
import useLiked from "../../hooks/useLiked";
//PRZENIEŚĆ:
interface RecipeState {
  id: number;
  missed?: string[];
}

const Favourites: React.FC = () => {
  const navigate = useNavigate();
  const { keys, keysName } = useLiked();
  useEffect(() => {
    if (keys.length === 0) return;
    for (const key in keys) {
      console.log(keys[key]);
    }
    for (const key in keysName) {
      console.log(keysName[key]);
    }
  }, [keys]);
  //PRZENIEŚĆ:
  function select(id: number, missed?: string[]) {
    console.log(id);
    const state: RecipeState = { id, missed };
    navigate(`/recipe`, { state });
  }
  //PRZENIEŚĆ:
  function checkIfIsLiked(name: string) {
    if (keysName.includes(name)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={classes.favourites}>
      <h1 className={classes.h1}>Favourites</h1>
      {keys.map((key) => {
        return (
          <Meal
            key={Math.random().toFixed(7)}
            id={key.id}
            title={key.title}
            img={key.img}
            onClick={select}
            isLiked={() => checkIfIsLiked(key.title)}
          />
        );
      })}
    </div>
  );
};

export default Favourites;
