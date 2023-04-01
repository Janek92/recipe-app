import { useEffect, useState } from "react";
import { LocalStorageKeyValue } from "../models/localStorageKeyValue";

const useLiked = () => {
  const [keys, setKeys] = useState<LocalStorageKeyValue[] | []>([]);
  const [keysName, setKeysName] = useState<string[]>([]);

  useEffect(() => {
    setKeys([]);
    const keysList = Object.keys(localStorage);
    for (const key in keysList) {
      const keyName = keysList[key];
      const value: LocalStorageKeyValue = JSON.parse(
        localStorage.getItem(keyName) || ""
      );
      // console.log(`${keyName} :`, value);
      setKeys((prev) => [...prev, value]);
      setKeysName((prev) => [...prev, keyName]);
    }
  }, []);
  return { keys, keysName };
};

export default useLiked;
