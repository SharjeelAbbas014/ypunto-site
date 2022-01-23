import React from "react";
import { createUseStyles } from "react-jss";
import map from "../assets/images/supplychain/map.png";
import bkg from "../assets/images/supplychain/bkg.png";

const useStyles = createUseStyles({
  wrapper: {
    backgroundImage: `url(${bkg})`,
    backgroundPosition: "top left",
    paddingBottom: 55,
  },
  tagline: {
    paddingTop: 372,
    paddingLeft: 104,
    fontFamily: "NewSpirit500",
    fontSize: 36,
    lineHeight: "45px",
    color: "#fff",
    maxWidth: 835,
  },
  info: {
    paddingTop: 74,
    paddingLeft: 104,
    fontFamily: "NewSpirit400",
    fontSize: 24,
    lineHeight: "30px",
    color: "#fff",
  },
  infoDesc: {
    fontFamily: "Proxima400",
    fontSize: 18,
    lineHeight: "22px",
    paddingLeft: 104,
    color: "#fff",
  },
  mapDiv: {
    position: "relative",
    // background: "red",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    "& img": {
      paddingRight: 103,
    },
  },
});

const SupplyChain = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.tagline}>
        We seek the most responsible factories to make sure your products are in
        good hands.
      </p>
      <p className={classes.info}>Interactive Map</p>
      <p className={classes.infoDesc}>Hover over each city</p>
      <div className={classes.mapDiv}>
        <img src={map} alt="YPunto Locations" />
      </div>
    </div>
  );
};

export default SupplyChain;
