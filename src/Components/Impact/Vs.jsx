import React from "react";
import { createUseStyles } from "react-jss";
import vsA from "../../assets/images/impact/vs/a.png";
import vsB from "../../assets/images/impact/vs/b.png";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  content: {
    padding: "71px 16px  100px 16px",
  },
  mainVs: {
    // width: "930px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& img": {
      padding: "0 38px",
    },
    "& > p": {
      fontFamily: "NewSpirit400",
      fontSize: "48px",
      lineHeight: "60px",
      color: "#c29b81",
      width: 230,
      textAlign: "center",
      flexWrap: "wrap",
    },
  },
  vsImageDiv: {
    "& p": {
      fontFamily: "Proxima400",
      fontSize: "24px",
      lineHeight: "29px",
      textAlign: "center",
      paddingTop: 34,
    },
  },
  descp: {
    maxWidth: 845,
    margin: "0 auto",
    fontFamily: "NewSpirit400",
    fontSize: "36px",
    lineHeight: "45px",
    color: "#c29B81",
    textAlign: "center",
    padding: "0 16px",
    paddingTop: 34,
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    padding: "61px 16px 0 16px",
    maxWidth: 670,
    margin: "0 auto",
  },
  numbers: {
    fontFamily: "NewSpirit500",
    fontSize: "64px",
    lineHeight: "80px",
    color: "#54563D",
  },
  numbersLabel: {
    fontFamily: "Proxima400",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000",
  },
});

const Vs = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.mainVs}>
          <div className={classes.vsImageDiv}>
            <img src={vsA} />
            <p>Y Punto</p>
          </div>
          <p>VS</p>
          <div className={classes.vsImageDiv}>
            <img src={vsB} />
            <p>Conventional Sweater</p>
          </div>
        </div>
        <p className={classes.descp}>
          Compared to conventional polyester sweaters, Y Punto’s sustainable
          fiber sweaters are saving
        </p>
        <div className={classes.stats}>
          <div className={classes.stat}>
            <p className={classes.numbers}>30-50%</p>
            <p className={classes.numbersLabel}>water savings</p>
          </div>
          <div className={classes.stat}>
            <p className={classes.numbers}>50-70%</p>
            <p className={classes.numbersLabel}>carbon footprints savings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vs;
