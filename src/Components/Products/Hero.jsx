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
    "@media(max-width:900px)": {
      "& img": {
        width: "100%",
        height: 350,
        objectFit: "cover",
      },
    },
  },
  content: {
    position: "absolute",
    bottom: "13%",
    left: "5.5%",
    fontSize: "36px",
    lineHeight: "150%",
    color: "#000",
    fontFamily: "NewSpirit500",
    "& p:nth-child(1)": {
      color: "#54563D",
    },

    "@media(max-width:850px)": {
      fontSize: "22px",
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
