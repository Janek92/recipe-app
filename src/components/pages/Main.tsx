import classes from "./Main.module.scss";
import MealTypeCard from "../UI/MealTypeCard";
import { cuisineList, dietList } from "../../data/images";
import { useNavigate } from "react-router-dom";
import { Meals } from "../../models/interfaces";

const Main = () => {
  const navigate = useNavigate();

  const clickHandler = (type: string) => {
    console.log(type);
    navigate(`/${type}`);
  };

  const mealsTypeSlider = (title: string, mealsTypeList: Meals[]) => {
    return (
      <>
        <h1 className={classes.h1}>{title}</h1>
        <div className={classes["card-container"]}>
          <ul className={classes.list}>
            {mealsTypeList.map((image) => {
              return (
                <MealTypeCard
                  img={image.img}
                  title={image.title}
                  onClick={clickHandler}
                  key={Math.random().toFixed(7)}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  };

  return (
    <main className={classes.main}>
      {mealsTypeSlider("explore the cuisines", cuisineList)}
      {mealsTypeSlider("find your diet", dietList)}
    </main>
  );
};

export default Main;
