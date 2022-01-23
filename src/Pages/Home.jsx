import React from "react";
import { createUseStyles } from "react-jss";
import Hero from "../Components/Home/Hero";
import Knit from "../Components/Home/Knit";
import Main from "../Components/Home/Main";
import Values from "../Components/Home/Values";

const useStyles = createUseStyles({
  wrapper: {},
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <Values />
      <Knit />
      <Main />
    </>
  );
};

export default Home;
