import React from "react";
import { createUseStyles } from "react-jss";
import ShowProduct from "./ShowProduct";
const useStyles = createUseStyles({
  wrapper: {
    maxWidth: 1030,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: 70,
  },
});
const ShowProducts = ({ info, folder }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {info.map((item) => (
        <ShowProduct key={info.id} info={item} folder={folder} />
      ))}
    </div>
  );
};

export default ShowProducts;
