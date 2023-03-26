import React, { useEffect, useState } from "react";
import classes from "./RecipeDetails.module.scss";
import { useLocation } from "react-router-dom";
import Spinner from "../UI/Spinner";
import useFetchMeals from "../../hooks/useFetchMeals";
import {
  AiOutlineClockCircle,
  AiOutlineExclamationCircle,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { BsPeople, BsCardChecklist } from "react-icons/bs";
import { Ingredient } from "../../models/recipeData";

const RecipeDetails: React.FC = () => {
  const location = useLocation();
  const { id, missed } = location.state;
  console.log(id);
  const { dataRecipeDetails, loading, error } = useFetchMeals(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );

  useEffect(() => {
    if (dataRecipeDetails === undefined) return;

    console.log(dataRecipeDetails);
  }, [dataRecipeDetails]);

  function myInstructions() {
    if (!dataRecipeDetails) return;
    return (
      <div className={classes.segment}>
        <h2 className={classes["sub-title"]}>
          <AiOutlineOrderedList />
          Instruction:
        </h2>
        {dataRecipeDetails.instructions === null || "" ? (
          <a href={dataRecipeDetails.sourceUrl}>
            Visit this site for instruction
          </a>
        ) : (
          <>
            <div
              className={classes.instructions}
              dangerouslySetInnerHTML={{
                __html: dataRecipeDetails.instructions,
              }}
            />
            <a href={dataRecipeDetails.sourceUrl}>
              Here is the original site with instruction
            </a>
          </>
        )}
      </div>
    );
  }

  function view() {
    if (!dataRecipeDetails) return;
    return (
      <>
        <h1 className={classes.h1}>{dataRecipeDetails.title}</h1>
        <img className={classes.img} src={dataRecipeDetails.image}></img>
        <div className={classes["ready-time"]}>
          <AiOutlineClockCircle />
          <span className={classes.value}>
            {dataRecipeDetails.readyInMinutes}min
          </span>
          <BsPeople />
          <span className={classes.value}>{dataRecipeDetails.servings}</span>
        </div>
        {missed !== undefined ? (
          <div className={`${classes.ingredients} ${classes.segment}`}>
            <h2 className={classes["sub-title"]}>
              <AiOutlineExclamationCircle />
              Missing ingredients:
            </h2>
            <ul className={classes.ul}>
              {missed.map((ingredient: string) => (
                <li key={Math.random().toFixed(7)}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {
          <div
            className={`${classes.ingredients} ${classes["--not-missing"]} ${classes.segment}`}
          >
            <h2 className={classes["sub-title"]}>
              <BsCardChecklist />
              All ingredients:
            </h2>
            <ul className={classes.ul}>
              {dataRecipeDetails.extendedIngredients.map(
                (ingredient: Ingredient) => (
                  <li key={Math.random().toFixed(7)}>{ingredient.name}</li>
                )
              )}
            </ul>
          </div>
        }
        {myInstructions()}
      </>
    );
  }

  return (
    <div className={classes.div}>
      <>{loading ? <Spinner /> : view()}</>
    </div>
  );
};

export default RecipeDetails;
