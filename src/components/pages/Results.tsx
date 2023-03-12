import React, { useEffect } from "react";
import classes from "./Results.module.scss";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useFetchMeals from "../../hooks/useFetchMeals";

const Results: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  // const {data, loading, error} = useFetchMeals(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
  //   import.meta.env.VITE_API_KEY
  // }&ingredients=${id}&number=20`);

  // `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
  //       import.meta.env.VITE_API_KEY
  //     }&ingredients=${paramsId}&number=20`

  useEffect(() => {
    console.log(`rodzaj: ${location.state}, danie:  ${id}`);
  }, []);

  return (
    <main className={classes.main}>
      <>{id}</>
    </main>
  );
};

export default Results;
