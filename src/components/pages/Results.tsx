import { useEffect } from "react";
import classes from "./Results.module.scss";
import { useParams } from "react-router-dom";

const Results = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
        import.meta.env.VITE_API_KEY
      }&ingredients=${id}&number=20`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("something went wrong");
        }
      })
      .then((res) => console.log(res));
  }, []);

  return (
    <main className={classes.main}>
      <>{id}</>
    </main>
  );
};

export default Results;
