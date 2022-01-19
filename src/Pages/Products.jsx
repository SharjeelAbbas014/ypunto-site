import React from "react";
import { createUseStyles } from "react-jss";
import Hero from "../Components/Products/Hero";
import ItemsSection from "../Components/Products/ItemsSection";

const useStyles = createUseStyles({
  wrapper: {},
});

const Products = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Hero />
      <ItemsSection />
    </div>
  );
};

export default Products;
