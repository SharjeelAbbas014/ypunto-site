import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {},
});

const ProductsAccessories = (props) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>Accessories</div>;
};

export default ProductsAccessories;
