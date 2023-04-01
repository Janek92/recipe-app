import { ImSpinner } from "react-icons/im";

import classes from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <aside className={classes.aside}>
      <ImSpinner />
    </aside>
  );
};

export default Spinner;
