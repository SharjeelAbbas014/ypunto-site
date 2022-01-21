import React from "react";
import { createUseStyles } from "react-jss";
import SideSelector from "../Components/Products/SideSelector";
import TypeHero from "../Components/Products/TypeHero";
import { WOMEN_INFO_DATA } from "../Components/Products/productsInfo.js";
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

const ProductsWomen = () => {
  const classes = useStyles();
  return (
    <>
      <TypeHero imagePath="women" name="Women" />
      <div className={classes.content}>
        <SideSelector />
        <ShowProducts info={WOMEN_INFO_DATA} folder="women" />
      </div>
    </>
  );
};

export default ProductsWomen;
