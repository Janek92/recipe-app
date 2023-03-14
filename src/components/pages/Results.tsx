import React, { useEffect } from "react";
import classes from "./Results.module.scss";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useFetchMeals from "../../hooks/useFetchMeals";

const Results: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  // let title = id!.replace(/,|\+|\s/g, " ");

  const { data, loading, error } = useFetchMeals(
    `https://api.spoonacular.com/recipes/${
      location.state
    }=${id}&number=20&apiKey=${import.meta.env.VITE_API_KEY}`
  );

  useEffect(() => {
    if (data === undefined) return;
    if (data!.hasOwnProperty("results")) {
      console.log("data nie pochodzi od składników");
    } else {
      console.log("data od składników");
    }
  }, [data]);

  return (
    <main className={classes.main}>
      <h1 className={classes.h1}>{id}</h1>
    </main>
  );
};

export default Results;
