import React from "react";
import classes from "./Main.module.scss";
import MealTypeCard from "../UI/MealTypeCard";
import { cuisineList, dietList } from "../../data/images";
import { useNavigate } from "react-router-dom";

// interface Props {}

// const Main:React.ReactNode<> = (props) => {
const Main = () => {
  const navigate = useNavigate();

  const clickHandler = (type: string) => {
    console.log(type);
    navigate(`/${type}`);
  };

  return (
    <main className={classes.main}>
      <h1 className={classes.h1}>explore the cuisines</h1>
      <div className={classes["card-container"]}>
        <ul className={classes.list}>
          {cuisineList.map((image) => {
            return (
              <MealTypeCard
                img={image.img}
                title={image.title}
                onClick={clickHandler}
              />
            );
          })}
        </ul>
      </div>
      <h1 className={classes.h1}>find your diet</h1>
      <div className={classes["card-container"]}>
        <ul className={classes.list}>
          {dietList.map((image) => {
            return (
              <MealTypeCard
                img={image.img}
                title={image.title}
                onClick={clickHandler}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
