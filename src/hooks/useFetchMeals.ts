import { useEffect, useState } from "react";

const useFetchMeals = (url: string) => {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError("An error occured while connection");
        }
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetchMeals;
