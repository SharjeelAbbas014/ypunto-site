import React from "react";
import { createUseStyles } from "react-jss";
import map from "../assets/images/supplychain/map.png";
import bkg from "../assets/images/supplychain/bkg.png";
import locationStar from "../assets/images/supplychain/star.png";
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
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    "& > img": {
      paddingRight: 103,
      maxWidth: "100%",
    },
    fontFamily: "Proxima400",
    fontSize: 18,
    lineHeight: "30px",
  },
  locationDot: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#C29B81",
  },
  locationDivShanghai: {
    position: "absolute",
    right: "10%",
    top: "61%",
    // background: "green",
  },
  locationDotShanghai: {
    position: "absolute",
    right: "120%",
    top: "-30%",
  },
  locationDivZhejiang: {
    position: "absolute",
    right: "10%",
    top: "68%",
    // background: "green",
  },
  locationDotZhejiang: {
    position: "absolute",
    right: "140%",
    top: "-30%",
  },
  locationDivJiangsu: {
    position: "absolute",
    right: "12%",
    top: "53%",
    // background: "green",
  },
  locationDotJiangsu: {
    position: "absolute",
    right: "140%",
    top: "30%",
  },
  locationDivAnhui: {
    position: "absolute",
    right: "18.5%",
    top: "63.5%",
    // background: "green",
  },
  locationDotAnhui: {
    position: "absolute",
    right: "10%",
    top: "-90%",
  },
  locationDivShandong: {
    position: "absolute",
    right: "20.5%",
    top: "43%",
    // background: "green",
  },
  locationDotShandong: {
    position: "absolute",
    right: "0%",
    top: "110%",
  },
  locationDivHenan: {
    position: "absolute",
    right: "24%",
    top: "50%",
    // background: "green",
  },
  locationDotHenan: {
    position: "absolute",
    right: "0%",
    top: "110%",
  },
  locationDivDhaka: {
    position: "absolute",
    right: "53.5%",
    top: "86%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  locationDivAddis: {
    position: "absolute",
    right: "44%",
    top: "86%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  // locationStar: {
  //   textAlign: "center",
  //   padding: 0,
  // },
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
        <div className={`${classes.locationDivShanghai}`}>
          <div
            className={`${classes.locationDot} ${classes.locationDotShanghai}`}
          />
          <p className={classes.locationName} style={{ color: "white" }}>
            Shanghai
          </p>
        </div>
        <div className={`${classes.locationDivZhejiang}`}>
          <div
            className={`${classes.locationDot} ${classes.locationDotZhejiang}`}
          />
          <p className={classes.locationName} style={{ color: "white" }}>
            Zhejiang
          </p>
        </div>
        <div className={`${classes.locationDivJiangsu}`}>
          <div
            className={`${classes.locationDot} ${classes.locationDotJiangsu}`}
          />
          <p className={classes.locationName} style={{ color: "white" }}>
            Jiangsu
          </p>
        </div>
        <div className={`${classes.locationDivAnhui}`}>
          <div
            className={`${classes.locationDot} ${classes.locationDotAnhui}`}
          />
          <p className={classes.locationName} style={{ color: "#000" }}>
            Anhui
          </p>
        </div>
        <div className={`${classes.locationDivShandong}`}>
          <div
            className={`${classes.locationDot} ${classes.locationDotShandong}`}
          />
          <p className={classes.locationName} style={{ color: "#000" }}>
            Shandong
          </p>
        </div>
        <div className={`${classes.locationDivHenan}`}>
          <div
            className={`${classes.locationDot} ${classes.locationDotHenan}`}
          />
          <p className={classes.locationName} style={{ color: "#000" }}>
            Henan
          </p>
        </div>
        <div className={`${classes.locationDivDhaka}`}>
          <img src={locationStar} className={classes.locationStar} />
          <p className={classes.locationName} style={{ color: "#fff" }}>
            Dhaka,
          </p>
          <p className={classes.locationName} style={{ color: "#fff" }}>
            Bangladesh
          </p>
        </div>
        <div className={`${classes.locationDivAddis}`}>
          <img src={locationStar} className={classes.locationStar} />
          <p className={classes.locationName} style={{ color: "#fff" }}>
            Addis Ababa,
          </p>
          <p className={classes.locationName} style={{ color: "#fff" }}>
            Ethiopia
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
