import { useEffect, useState } from "react";
import { IngredientsData } from "../models/ingredientsData";
import { RecipeData } from "../models/recipeData";
import { Result } from "../models/typesData";

const useFetchMeals = (url: string) => {
  const [dataTypes, setDataTypes] = useState<Result[]>();
  const [dataIngredients, setDataIngredients] = useState<IngredientsData[]>();
  const [dataRecipeDetails, setDataRecipeDetails] = useState<RecipeData>();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res: Response) => {
        if (res.ok) {
          return res.json();
        } else {
          setError("An error occured while connection");
        }
      })
      .then((res: any) => {
        if (res.hasOwnProperty("results")) {
          setDataTypes(res.results);
        } else if (res.hasOwnProperty("analyzedInstructions")) {
          setDataRecipeDetails({
            instructions: res.instructions,
            sourceUrl: res.sourceUrl,
            title: res.title,
            image: res.image,
            readyInMinutes: res.readyInMinutes,
            servings: res.servings,
            extendedIngredients: res.extendedIngredients,
          });
        } else {
          setDataIngredients(res);
        }
      })
      .catch((err: Error) => {
        console.log(err);
        setError("Data fetch failed");
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { dataTypes, dataIngredients, dataRecipeDetails, loading, error };
};

export default useFetchMeals;
