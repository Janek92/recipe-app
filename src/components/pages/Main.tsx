import React, { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { BsHandIndex } from "react-icons/bs";
import { motion } from "framer-motion";

import { Meals } from "~/models/meals";
import { cuisineList, dietList, dailyMealList } from "~/utils/images";
import MealTypeCard from "~/components/UI/MealTypeCard";
import ButtonControl from "~/components/UI/ButtonControl";
import SmallIcons from "~/components/UI/SmallIcons";
import { slideInOut } from "~/utils/reusableFunctions";

import classes from "./Main.module.scss";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLUListElement>(null);
  const [rolledOut, setRolledOut] = useState<boolean>(false);

  const clickHandler = useCallback((sort: string, type: string) => {
    const state = `complexSearch?${type}`;
    navigate(`/${sort}`, { state });
  }, []);

  function mealsTypeSlider(title: string, mealsTypeList: Meals[]) {
    return (
      <>
        <h1 className={classes.h1}>{title}</h1>
        <div className={classes["card-container"]}>
          <ul className={classes.list}>
            <span className={classes.hand}>
              <BsHandIndex />
            </span>
            {mealsTypeList.map((image) => {
              return (
                <MealTypeCard
                  img={image.img}
                  title={image.title}
                  type={image.type}
                  onClick={clickHandler}
                  key={Math.random().toFixed(7)}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  return (
    <motion.div {...slideInOut} className={classes.div}>
      <ButtonControl
        className={
          !rolledOut
            ? classes.expander
            : `${classes.expander} ${classes["--clicked"]}`
        }
        onClick={() => {
          setRolledOut((prev) => !prev);
        }}
      >
        <MdRestaurantMenu />
        <ul
          className={
            !rolledOut
              ? classes.menu
              : `${classes.menu} ${classes["--roll-out"]}`
          }
          ref={menuRef}
        >
          {dailyMealList.map((el) => {
            return (
              <SmallIcons
                title={el.title}
                type={el.type}
                onClick={clickHandler}
                key={Math.random().toFixed(7)}
              >
                <el.img />
                {el.title}
              </SmallIcons>
            );
          })}
        </ul>
      </ButtonControl>
      {mealsTypeSlider("find your diet", dietList)}
      {mealsTypeSlider("explore the cuisines", cuisineList)}
    </motion.div>
  );
};

export default Main;
