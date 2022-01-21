import React from "react";
import { createUseStyles } from "react-jss";
import SideSelector from "../Components/Products/SideSelector";
import TypeHero from "../Components/Products/TypeHero";
import { KIDS_INFO_DATA } from "../Components/Products/productsInfo.js";
import ShowProducts from "../Components/Products/ShowProducts";

const useStyles = createUseStyles({
  content: {
    margin: "0 auto",
    maxWidth: 1230,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

const ProductsKids = () => {
  const classes = useStyles();
  return (
    <>
      <TypeHero imagePath="kids" name="Kids" />
      <div className={classes.content}>
        <SideSelector />
        <ShowProducts info={KIDS_INFO_DATA} folder="kids" />
      </div>
    </>
  );
};

export default ProductsKids;
