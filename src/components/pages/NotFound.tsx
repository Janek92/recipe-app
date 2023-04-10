import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "~/components/UI/Spinner";

import classes from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div className={classes.div}>
      <h1 className={classes.h1}>Page not found</h1>
      <Spinner />
    </div>
  );
};

export default NotFound;
