import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    maxWidth: 1240,
    margin: "0 auto",
    position: "relative",
    "& p": {
      fontFamily: "NewSpirit500",
      color: "#54563D",
      position: "absolute",
      bottom: "10%",
      right: "7%",
      fontSize: "5vh",
      "@media(min-width:1440px)": {
        fontSize: 64,
      },
      "@media(max-width:700px)": {
        fontSize: "3vh",
      },
    },
    "& img": {
      width: "100%",
    },
  },
});

const TypeHero = ({ imagePath, name }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img
        src={require(`../../assets/images/products/header_${imagePath}.png`)}
      />
      <p
        style={
          name === "Kids" || name === "Accessories"
            ? { left: "7%" }
            : { right: "7%" }
        }
      >
        {name}
      </p>
    </div>
  );
};

export default TypeHero;
