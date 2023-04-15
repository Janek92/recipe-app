import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { IconType } from "react-icons";

import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  function mediaIconCreator(iconName: IconType, redirectionPath: string) {
    const Icon = iconName;
    return (
      <a className={classes.anchor} href={redirectionPath}>
        <Icon />
      </a>
    );
  }
  return (
    <div className={classes.div}>
      <div className={classes["social-media"]}>
        {mediaIconCreator(
          BsLinkedin,
          "https://linkedin.com/in/jan-jakóbczyk-973b15271"
        )}
        {mediaIconCreator(BsGithub, "https://github.com/Janek92")}
        {mediaIconCreator(BsFacebook, "https://www.facebook.com/janq.jj")}
      </div>
      <div className={classes.information}>
        <p>author : Jan Jakóbczyk</p>
        <p>last update : 10.04.2023</p>
      </div>
    </div>
  );
};

export default Footer;
