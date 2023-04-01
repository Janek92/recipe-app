import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { checkIfIsLiked } from "~/utils/reusableFunctions";
import useFetchMeals from "~/hooks/useFetchMeals";
import useLiked from "~/hooks/useLiked";
import useSelect from "~/hooks/useSelect";
import Spinner from "~/components/UI/Spinner";
import Meal from "~/components/UI/Meal";

import classes from "./Results.module.scss";

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { keysName } = useLiked();
  const { select } = useSelect();

  let title: string;
  id?.includes(",")
    ? (title = `Results for: ${id.replaceAll("+", " ")}`)
    : (title = id!);

  const { dataTypes, dataIngredients, loading, error } = useFetchMeals(
    `https://api.spoonacular.com/recipes/${
      location.state
    }=${id}&number=20&apiKey=${import.meta.env.VITE_API_KEY}&ignorePantry=false`
  );

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
            onClick={() => select(meal.id, missedIngredients)}
            isLiked={() => checkIfIsLiked(meal.title, keysName)}
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
          isLiked={() => checkIfIsLiked(meal.title, keysName)}
        />
      ));
    }
  }

  return (
    <div className={classes.div}>
      <>
        <h1 className={classes.h1}>{title}</h1>
        {loading ? <Spinner /> : view()}
      </>
    </div>
  );
};

export default Results;
