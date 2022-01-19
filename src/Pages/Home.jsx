import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {},
});

const Home = (props) => {
  const classes = useStyles();
  return <div className={classes.wrapper}></div>;
};

export default Home;
