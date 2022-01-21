import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
    marginTop: 54,
    transition: "transform 0.4s ease-in-out",
    cursor: "pointer",
    width: "364px",
    "& p": {
      fontFamily: "Proxima400",
      fontSize: 24,
      lineHeight: "150%",
      marginTop: 28,
    },
    "&:hover": {
      transform: "scale(1.1)",
    },
    "& img": {
      width: "100%",
    },
    "@media(max-width:365px)": {
      width: 300,
    },
  },
});

const Item = ({ name, icon }) => {
  const history = useHistory();
  const navigateTo = () => {
    history.push(`/products/${icon}`);
  };
  const classes = useStyles();
  return (
    <div className={classes.wrapper} onClick={navigateTo}>
      <img
        src={require(`../../assets/images/products/main_${icon}.png`)}
        alt={name}
      />
      <p>{name}</p>
    </div>
  );
};

export default Item;
