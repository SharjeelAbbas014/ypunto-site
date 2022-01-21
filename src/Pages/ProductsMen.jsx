import React from "react";
import { createUseStyles } from "react-jss";
import SideSelector from "../Components/Products/SideSelector";
import TypeHero from "../Components/Products/TypeHero";
import { MEN_INFO_DATA } from "../Components/Products/productsInfo.js";
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

const ProductsMen = () => {
  const classes = useStyles();
  return (
    <>
      <TypeHero imagePath="men" name="Men" />
      <div className={classes.content}>
        <SideSelector />
        <ShowProducts info={MEN_INFO_DATA} folder="men" />
      </div>
    </>
  );
};

export default ProductsMen;
