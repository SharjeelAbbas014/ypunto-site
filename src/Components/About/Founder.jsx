import React from "react";
import { createUseStyles } from "react-jss";
import founder from "../../assets/images/about/founder.png";
const useStyles = createUseStyles({
  wrapper: {
    background: "#E3DACF",
    width: "100%",
  },
  mainContent: {
    maxWidth: 1130,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "32px 16px",
    margin: "0 auto",
    fontFamily: "Proxima400",
    fontSize: 24,
    lineHeight: "30px",
    "@media(max-width:1030px)": {
      textAlign: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  title: {
    fontFamily: "NewSpirit500",
    fontSize: 36,
    lineHeight: "45px",
    color: "#54563D",
  },
  greeting: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  intro: {
    maxWidth: 554,
    paddingBottom: 24,
  },
  sign: {
    paddingTop: 24,
  },
  founderImage: {
    "@media(max-width:1030px)": {
      position: "relative",
      right: 10,
      paddingTop: 24,
    },
    "@media(max-width:530px)": {
      width: "100%",
    },
  },
});

const Founder = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContent}>
        <div className={classes.content}>
          <p className={classes.title}>Our Founder</p>
          <p className={classes.greeting}>Hi! I'm Jane.</p>
          <p className={classes.intro}>
            My mom was a tailor so I grew up surrounded by different kinds of
            fabric and clothes. I started my business from scratch. After 20
            years in this industry, I think it is time to make some changes. I
            want to build a sustainable and humane brand that makes knitwear
            differently.
          </p>
          <p className={classes.slogan}>
            We are a brand that says “That's it.”
          </p>
          <p className={classes.slogan2}>
            We want to be THE change for our industry.
          </p>
          <p className={classes.sign}>Y Punto.</p>
        </div>
        <img className={classes.founderImage} src={founder} />
      </div>
    </div>
  );
};

export default Founder;
