import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
    marginTop: 54,
    transition: "transform 0.4s ease-in-out",
    cursor: "pointer",
    "& p": {
      fontFamily: "Proxima400",
      fontSize: 24,
      lineHeight: "150%",
      marginTop: 28,
    },
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

const Item = ({ name, icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img
        src={require(`../../assets/images/products/main_${icon}.png`)}
        alt={name}
      />
      <p>{name}</p>
    </div>
  );
};

export default Item;
