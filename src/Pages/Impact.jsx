import React, { Suspense } from "react";
import { createUseStyles } from "react-jss";
import Certified from "../Components/Impact/Certified";
import Hero from "../Components/Impact/Hero";
import Sustain from "../Components/Impact/Sustain";
import Vs from "../Components/Impact/Vs";

const useStyles = createUseStyles({
  wrapper: {},
});

const Impact = () => {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <Vs />
      <Sustain />
      <Certified />
    </>
  );
};

export default Impact;
