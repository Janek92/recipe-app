import { useEffect, useState } from "react";
import { IngredientsData } from "../models/ingredientsData";
import { TypesData } from "../models/typesData";

const useFetchMeals = (url: string) => {
  const [data, setData] = useState<IngredientsData | TypesData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | string>();

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
      .then((res: IngredientsData | TypesData) => setData(res))
      .catch((err: Error) => {
        console.log(err);
        setError("Data fetch failed");
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetchMeals;
