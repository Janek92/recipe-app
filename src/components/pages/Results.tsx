import React from "react";
import classes from "./Results.module.scss";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useFetchMeals from "../../hooks/useFetchMeals";
import Spinner from "../UI/Spinner";
import Meal from "../UI/Meal";

const Results: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  let title: string;
  if (id?.includes(",")) {
    title = `Results for: ${id.replace("+", " ")}`;
  } else {
    title = id!;
  }

  const { dataTypes, dataIngredients, loading, error } = useFetchMeals(
    `https://api.spoonacular.com/recipes/${
      location.state
    }=${id}&number=20&apiKey=${import.meta.env.VITE_API_KEY}`
  );

  function view() {
    if (!dataIngredients && !dataTypes) return;
    if (dataIngredients) {
      console.log(dataIngredients);
      return dataIngredients.map((meal) => (
        <Meal title={meal.title} img={meal.image} />
      ));
    } else if (dataTypes) {
      console.log(dataTypes);
      return dataTypes.map((meal) => (
        <Meal title={meal.title} img={meal.image} />
      ));
    }
  }

  return (
    <main className={classes.main}>
      <>
        <h1 className={classes.h1}>{title}</h1>
        {loading ? <Spinner /> : view()}
      </>
    </main>
  );
};

export default Results;
