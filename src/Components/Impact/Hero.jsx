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
    width: "1137px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "150px 0",
  },
  miniTag: {
    fontFamily: "NewSpirit400",
    fontSize: "36px",
    lineHeight: "46px",
    color: "#54563D",
  },
  mainTag: {
    fontFamily: "NewSpirit400",
    fontSize: "64px",
    lineHeight: "80px",
    color: "#54563D",
  },
  recycleImg: {
    userSelect: "none",
    pointerEvents: "none",
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
