import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import { checkIfIsLiked } from "~/utils/reusableFunctions";
import useLiked from "~/hooks/useLiked";
import useSelect from "~/hooks/useSelect";
import Meal from "~/components/UI/Meal";
import { slideInOut } from "~/utils/reusableFunctions";

import classes from "./Favourites.module.scss";

const Favourites: React.FC = () => {
  const navigate = useNavigate();
  const { keys, keysName } = useLiked();
  const { select } = useSelect();

  const view = useMemo(() => {
    return keys.map((key) => {
      return (
        <LazyLoadComponent key={Math.random().toFixed(7)}>
          <Meal
            id={key.id}
            title={key.title}
            img={key.img}
            onClick={() => select(key.id)}
            isLiked={() => checkIfIsLiked(key.title, keysName)}
          />
        </LazyLoadComponent>
      );
    });
  }, [keys]);

  return (
    <motion.div {...slideInOut} className={classes.div}>
      <h1 className={classes.h1}>Favourites</h1>
      {view}
    </motion.div>
  );
};

export default Favourites;
