import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { createUseStyles } from "react-jss";
import Item from "./Item";

const useStyles = createUseStyles({
  wrapper: {
    maxWidth: 1240,
    margin: "0 auto",
    marginBottom: 69,
  },
  title: {
    fontFamily: "NewSpirit400",
    textAlign: "center",
    fontSize: "4vh",
    lineHeight: "150%",
    color: "#C29B81",
    paddingTop: 54,
    paddingRight: 8,
    paddingLeft: 8,
    "@media(min-width:1440px)": {
      fontSize: 36,
    },
    "@media(max-width:850px)": {
      fontSize: "2.5vh",
    },
  },
  items: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const types = [
  {
    name: "Women",
    icon: "women",
  },
  {
    name: "Men",
    icon: "men",
  },
  {
    name: "Kids",
    icon: "kids",
  },
  {
    name: "Home Textiles",
    icon: "home-textiles",
  },
  {
    name: "Homewear",
    icon: "home-wear",
  },
  {
    name: "Accessories",
    icon: "accessories",
  },
];
const ItemsSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>
        KNITTING for the Earth with sustainable fibers
      </p>
      <div className={classes.items}>
        {types.map((type, idx) => (
          <Item key={idx} icon={type.icon} name={type.name} />
        ))}
      </div>
    </div>
  );
};

export default ItemsSection;
