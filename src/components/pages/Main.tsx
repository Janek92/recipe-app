import React from "react";
import classes from "./Main.module.scss";
import MealTypeCard from "../UI/MealTypeCard";
import african from "../../assets/cuisines/african_640.jpg";
import american from "../../assets/cuisines/american_640.jpg";
import british from "../../assets/cuisines/british_640.jpg";
import cajun from "../../assets/cuisines/cajun_640.jpg";

// interface Props {}

// const Main:React.ReactNode<> = (props) => {
const Main = () => {
  return (
    <main className={classes.main}>
      <h1 className={classes.h1}>explore the cuisines</h1>
      <div className={classes["card-container"]}>
        <ul className={classes.list}>
          <MealTypeCard img={african} title="african" />
          <MealTypeCard img={american} title="american" />
          <MealTypeCard img={british} title="british" />
          <MealTypeCard img={cajun} title="cajun" />
        </ul>
      </div>
      <h1 className={classes.h1}>find your diet</h1>
      <div className={classes["card-container"]}></div>
    </main>
  );
};

export default Main;
