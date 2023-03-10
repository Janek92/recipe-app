import React from "react";
import classes from "./Results.module.scss";
import { useParams } from "react-router-dom";

// interface Props {}

// const Main:React.ReactNode<> = (props) => {
const Results = () => {
  const { id } = useParams();
  return <main className={classes.main}>{id}</main>;
};

export default Results;
