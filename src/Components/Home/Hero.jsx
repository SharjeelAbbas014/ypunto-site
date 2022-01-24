import React from "react";
import { createUseStyles } from "react-jss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/home/c-a.png";
import img2 from "../../assets/images/home/c-b.png";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  wrapper: {},
  contentA: {
    position: "absolute",
    zIndex: 100,
    top: "23%",
    left: "7%",
    fontSize: 18,
    lineHeight: "22px",
    textAlign: "left",
    "@media(max-width:1120px)": {
      top: "14%",
      left: "5%",
    },
    "@media(max-width:760px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      top: "unset",
      left: "unset",
    },
  },
  title: {
    fontFamily: "NewSpirit600",
    fontSize: 64,
    lineHeight: "80px",
    color: "#54563D",
    width: 500,
    "@media(max-width:1120px)": {
      fontSize: 46,
      lineHeight: "60px",
    },
    "@media(max-width:925px)": {
      fontSize: 36,
      lineHeight: "45px",
      width: 300,
    },
    // "@media(max-width:760px)": {
    //   fontSize: 24,
    //   lineHeight: "125%",
    //   width: 200,
    // },
  },
  lineA: {
    fontFamily: "NewSpirit400",
    paddingTop: 14,
    "@media(max-width:760px)": {
      paddingTop: 6,
    },
  },
  lineB: {
    fontFamily: "NewSpirit400",
  },
  lineC: {
    fontFamily: "NewSpirit400",
    paddingTop: 24,
    color: "#000",
    "& span": {
      fontFamily: "P22",
    },
    paddingBottom: 61,
    "@media(max-width:925px)": {
      paddingBottom: 32,
    },
    "@media(max-width:760px)": {
      paddingTop: 6,
      paddingBottom: 28,
    },
  },
  btnAbout: {
    borderRadius: 15,
    background: "#54563D",
    fontFamily: "Proxima600",
    fontSize: 18,
    color: "#fff",
    padding: "19px 67px",
    textDecoration: "none",
    "@media(max-width:925px)": {
      padding: "16px 37px",
    },
    "@media(max-width:760px)": {
      padding: "12px 24px",
      fontSize: 16,
    },
  },
  carousel1: {
    "@media(max-width:760px)": {
      display: "flex",
      // flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // textAlign: "center",
    },
  },
  contentB: {
    position: "absolute",
  },
  titleB: {
    width: 645,
    fontFamily: "NewSpirit600",
    fontSize: 64,
    lineHeight: "80px",
    color: "white",
    paddingBottom: 52,
    marginTop: 200,
    "@media(max-width:1240px)": {
      marginTop: 100,
    },
    "@media(max-width:1010px)": {
      fontSize: 36,
      lineHeight: "50px",
      paddingBottom: 38,
    },
    "@media(max-width:830px)": {
      marginTop: 0,
    },
    "@media(max-width:425px)": {
      fontSize: 32,
      lineHeight: "30px",
      // marginTop: 0,
    },
  },
  btnSee: {
    fontFamily: "Proxima700",
    fontSize: "18px",
    lineHeight: "22px",
    background: "#E3DACF",
    borderRadius: "15px",
    padding: "19px 43px",
    color: "#000",
    textDecoration: "none",
    "@media(max-width:1010px)": {
      padding: "16px 24px",
      fontSize: "16px",
    },
  },
  carousel2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselDiv: {
    "@media(max-width:760px)": {
      "& img": {
        height: 350,
        objectFit: "cover",
        // width: "100%",
        // overflow: "hidden",
      },
    },
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        className={classes.carouselDiv}
      >
        <div className={classes.carousel1}>
          <div className={classes.contentA}>
            <p className={classes.title}>Knit the World a Better Place</p>
            <p className={classes.lineA}>
              We love knits, but they should treat the{" "}
            </p>
            <p className={classes.lineB}>planet as well as they treat us.</p>
            <p className={classes.lineC}>
              It's time for a change. Y punto (<span>and that's it</span>)!
            </p>
            <Link to="/about" className={classes.btnAbout}>
              About Us
            </Link>
          </div>
          <img src={img1} />
        </div>
        <div className={classes.carousel2}>
          <div className={classes.contentB}>
            <p className={classes.titleB}>
              <p>We are</p>
              <p>inspired knitting</p>
            </p>
            <Link className={classes.btnSee} to="/impact">
              See how we knit
            </Link>
          </div>
          <img src={img2} />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
