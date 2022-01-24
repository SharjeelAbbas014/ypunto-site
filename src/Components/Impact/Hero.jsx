import React from "react";
import { createUseStyles } from "react-jss";
import bkg from "../../assets/images/impact/heroBkg.png";
import recycle from "../../assets/images/impact/recycle.png";
const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, #E3DACF 0.94%, rgba(227, 218, 207, 0) 100%)",
  },
  content: {
    // position: "absolute",
    maxWidth: "1137px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8% 0",
    "@media(max-width:410px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  miniTag: {
    fontFamily: "NewSpirit400",
    fontSize: "36px",
    lineHeight: "46px",
    color: "#54563D",
    "@media(max-width:860px)": {
      fontSize: "24px",
      lineHeight: "32px",
    },
    "@media(max-width:650px)": {
      fontSize: "18px",
      lineHeight: "24px",
    },
  },
  mainTag: {
    fontFamily: "NewSpirit400",
    fontSize: "64px",
    lineHeight: "80px",
    color: "#54563D",
    "@media(max-width:860px)": {
      fontSize: "48px",
      lineHeight: "56px",
    },
    "@media(max-width:650px)": {
      fontSize: "36px",
      lineHeight: "42px",
    },
  },
  recycleImg: {
    userSelect: "none",
    pointerEvents: "none",
    padding: "0 16px",
    "@media(max-width:860px)": {
      width: "200px",
    },
    "@media(max-width:650px)": {
      width: "150px",
    },
    "@media(max-width:410px)": {
      paddingTop: 16,
    },
  },
  tagDiv: {
    padding: "0 16px",
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {/* <img className={classes.bkg} src={bkg} /> */}
      <div className={classes.content}>
        <div className={classes.tagDiv}>
          <p className={classes.miniTag}>
            We make your knit products even better
          </p>
          <p className={classes.mainTag}>BY MAKING THE WORLD A BETTER PLACE</p>
        </div>
        <img className={classes.recycleImg} src={recycle} />
      </div>
    </div>
  );
};

export default Hero;
