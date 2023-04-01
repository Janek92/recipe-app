import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { checkIfIsLiked } from "~/utils/reusableFunctions";
import useLiked from "~/hooks/useLiked";
import useSelect from "~/hooks/useSelect";
import Meal from "~/components/UI/Meal";

import classes from "./Favourites.module.scss";

const Favourites: React.FC = () => {
  const navigate = useNavigate();
  const { keys, keysName } = useLiked();
  const { select } = useSelect();

  // useEffect(() => {
  //   if (keys.length === 0) return;
  //   for (const key in keys) {
  //     console.log(keys[key]);
  //   }
  //   for (const key in keysName) {
  //     console.log(keysName[key]);
  //   }
  // }, [keys]);

  return (
    <div className={classes.div}>
      <h1 className={classes.h1}>Favourites</h1>
      {keys.map((key) => {
        return (
          <Meal
            key={Math.random().toFixed(7)}
            id={key.id}
            title={key.title}
            img={key.img}
            onClick={() => select(key.id)}
            isLiked={() => checkIfIsLiked(key.title, keysName)}
          />
        );
      })}
    </div>
  );
};

export default Favourites;
