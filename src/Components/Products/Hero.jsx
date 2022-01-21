import React from "react";
import { createUseStyles } from "react-jss";
import heroImage from "../../assets/images/products/header-0.png";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    "& img": {
      width: "100%",
      position: "relative",
    },
  },
  content: {
    position: "absolute",
    bottom: "13%",
    left: "5.5%",
    fontSize: "4vh",
    lineHeight: "150%",
    color: "#000",
    fontFamily: "NewSpirit500",
    "& p:nth-child(1)": {
      color: "#54563D",
    },
    "@media(min-width:1440px)": {
      fontSize: 36,
    },
    "@media(max-width:850px)": {
      fontSize: "2vh",
    },
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={heroImage} />
      <div className={classes.content}>
        <p>Sustainable flat knit garments</p>
        <p>following your designs or</p>
        <p>created by our design team</p>
      </div>
    </div>
  );
};

export default Hero;
