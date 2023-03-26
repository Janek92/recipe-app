import React from "react";
import classes from "./Results.module.scss";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetchMeals from "../../hooks/useFetchMeals";
import Spinner from "../UI/Spinner";
import Meal from "../UI/Meal";

interface RecipeState {
  id: number;
  missed?: string[];
}

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  let title: string;
  id?.includes(",")
    ? (title = `Results for: ${id.replaceAll("+", " ")}`)
    : (title = id!);

  const { dataTypes, dataIngredients, loading, error } = useFetchMeals(
    `https://api.spoonacular.com/recipes/${
      location.state
    }=${id}&number=20&apiKey=${import.meta.env.VITE_API_KEY}&ignorePantry=false`
  );

  function select(id: number, missed?: string[]) {
    console.log(id);
    const state: RecipeState = { id, missed };
    navigate(`/recipe`, { state });
  }

  function view() {
    if (!dataIngredients && !dataTypes) return;
    if (dataIngredients) {
      return dataIngredients.map((meal) => {
        const missedInitial = meal.missedIngredients;
        const missedIngredients: string[] = [];
        for (const ingredient of missedInitial) {
          missedIngredients.push(ingredient.name);
        }
        return (
          <Meal
            id={meal.id}
            missed={missedIngredients}
            key={Math.random().toFixed(7)}
            title={meal.title}
            img={meal.image}
            onClick={select}
          />
        );
      });
    } else if (dataTypes) {
      return dataTypes.map((meal) => (
        <Meal
          id={meal.id}
          key={Math.random().toFixed(7)}
          title={meal.title}
          img={meal.image}
          onClick={select}
        />
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
