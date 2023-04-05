import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useError = () => {
  const [malfunction, setMalfunction] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const displayAlarm = (errorMessage: string) => {
    return alert(
      `An error occured. You will back on the main page. (${errorMessage})`
    );
  };

  const navigation = () => {
    navigate("/");
    setMalfunction(false);
  };

  useEffect(() => {
    if (malfunction) {
      displayAlarm(error!);
      navigation();
    }
  }, [malfunction]);

  return { setError, setMalfunction };
};

export default useError;
