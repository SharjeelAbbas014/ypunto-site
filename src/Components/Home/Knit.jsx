import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    background: "#E3DACF",
    textAlign: "center",
    paddingTop: 90,
    paddingBottom: 100,
    textAlign: "center",
    fontFamily: "Proxima400",
    fontSize: 24,
    lineHeight: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: 659,
    padding: "0 16px",
  },
  title: {
    fontFamily: "NewSpirit500",
    fontSize: "36px",
    lineHeight: "45px",
    color: "#54563D",
  },
  beforePara: {
    paddingTop: 57,
    paddingBottom: 36,
  },
  para: {
    paddingBottom: 36,

    "& span": {
      fontFamily: "Proxima700",
    },
  },
});

const Knit = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <p className={classes.title}>We KNIT to be SUSTAINABLE</p>
        <p className={classes.beforePara}>
          We strongly believe and invest in Sustainability.
        </p>
        <p className={classes.para}>
          We use the most <span>sustainable fibers</span> because we believe
          knitwear is the second layer of your customers' skin, and nothing says
          “I'm home” like wrapping yourself with a soft knit. But, if that knit
          is harming our planet, then it harms everyone's home and your brand
          image.
        </p>
        <p className={classes.lastLine}>
          We are committed to doing things right so when someone wears our
          knits, they can feel truly good about it.
        </p>
      </div>
    </div>
  );
};

export default Knit;
