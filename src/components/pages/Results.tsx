import React, { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import { checkIfIsLiked } from "~/utils/reusableFunctions";
import useFetchMeals from "~/hooks/useFetchMeals";
import useLiked from "~/hooks/useLiked";
import useSelect from "~/hooks/useSelect";
import Spinner from "~/components/UI/Spinner";
import Meal from "~/components/UI/Meal";
import { slideInOut } from "~/utils/reusableFunctions";

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

  const { dataTypes, dataIngredients, loading } = useFetchMeals(
    `https://api.spoonacular.com/recipes/${
      location.state
    }=${id}&number=80&apiKey=${import.meta.env.VITE_API_KEY}&ignorePantry=false`
  );

  const view = useMemo(() => {
    if (!dataIngredients && !dataTypes) return;
    if (dataIngredients) {
      return dataIngredients.map((meal) => {
        const missedInitial = meal.missedIngredients;
        const missedIngredients: string[] = [];
        for (const ingredient of missedInitial) {
          missedIngredients.push(ingredient.name);
        }
        return (
          <LazyLoadComponent key={Math.random().toFixed(7)}>
            <Meal
              id={meal.id}
              missed={missedIngredients}
              title={meal.title}
              img={meal.image}
              onClick={() => select(meal.id, missedIngredients)}
              isLiked={() => checkIfIsLiked(meal.title, keysName)}
            />
          </LazyLoadComponent>
        );
      });
    } else if (dataTypes) {
      return dataTypes.map((meal) => (
        <LazyLoadComponent key={Math.random().toFixed(7)}>
          <Meal
            id={meal.id}
            title={meal.title}
            img={meal.image}
            onClick={select}
            isLiked={() => checkIfIsLiked(meal.title, keysName)}
          />
        </LazyLoadComponent>
      ));
    }
  }, [dataIngredients, dataTypes]);

  return (
    <motion.div {...slideInOut} className={classes.div}>
      <>
        <h1 className={classes.h1}>{title}</h1>
        {loading ? <Spinner /> : view}
      </>
    </motion.div>
  );
};

export default Results;
