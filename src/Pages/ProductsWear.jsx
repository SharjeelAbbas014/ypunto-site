import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {},
});

const ProductsWear = (props) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>Wear</div>;
};

export default ProductsWear;
