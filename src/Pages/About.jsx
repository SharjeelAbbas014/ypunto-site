import React from "react";
import { createUseStyles } from "react-jss";
import founder from "../assets/images/about/founder.png";
import Brands from "../Components/About/Brands";
import Founder from "../Components/About/Founder";
import News from "../Components/About/News";
import Team from "../Components/About/Team";
const useStyles = createUseStyles({
  wrapper: {},
});

const About = (props) => {
  const classes = useStyles();
  return (
    <>
      <Founder />
      <Team />
      <Brands />
      <News />
    </>
  );
};

export default About;
