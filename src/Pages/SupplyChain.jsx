import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { motion } from "framer-motion";
import map from "../assets/images/supplychain/map.png";
import bkg from "../assets/images/supplychain/bkg.png";
import locationStar from "../assets/images/supplychain/star.png";
import shanghai from "../assets/images/supplychain/shanghai.png";
import bangladesh from "../assets/images/supplychain/bangladesh.png";
import anhui from "../assets/images/supplychain/anhui.png";
import ethopia from "../assets/images/supplychain/ethopia.png";
import shandong from "../assets/images/supplychain/shandong.png";
import zhejiang from "../assets/images/supplychain/zhejiang.png";
import jiangsu from "../assets/images/supplychain/jiangsu.png";
import henan from "../assets/images/supplychain/henan.png";

const useStyles = createUseStyles({
  wrapper: {
    backgroundImage: `url(${bkg})`,
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    // paddingBottom: 55,
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
    paddingBottom: "55px",
  },
  locationDot: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#C29B81",
  },
  locationDivShanghai: {
    position: "absolute",
    cursor: "pointer",

    right: "11%",
    top: "57%",
  },
  locationDotShanghai: {
    position: "absolute",
    cursor: "pointer",

    right: "130%",
    top: "-30%",
  },
  locationDivZhejiang: {
    position: "absolute",
    cursor: "pointer",

    right: "12%",
    top: "63%",
  },
  locationDotZhejiang: {
    position: "absolute",
    cursor: "pointer",

    right: "140%",
    top: "-30%",
  },
  locationDivJiangsu: {
    position: "absolute",
    cursor: "pointer",

    right: "13%",
    top: "49%",
  },
  locationDotJiangsu: {
    position: "absolute",
    cursor: "pointer",

    right: "140%",
    top: "30%",
  },
  locationDivAnhui: {
    position: "absolute",
    cursor: "pointer",

    right: "21%",
    top: "58%",
  },
  locationDotAnhui: {
    position: "absolute",
    cursor: "pointer",

    right: "10%",
    top: "-90%",
  },
  locationDivShandong: {
    position: "absolute",
    cursor: "pointer",

    right: "22%",
    top: "42%",
  },
  locationDotShandong: {
    position: "absolute",
    cursor: "pointer",

    right: "0%",
    top: "110%",
  },
  locationDivHenan: {
    position: "absolute",
    cursor: "pointer",

    right: "26%",
    top: "46%",
  },
  locationDotHenan: {
    position: "absolute",
    right: "0%",
    top: "110%",
  },
  locationDivDhaka: {
    position: "absolute",
    right: "58.5%",
    top: "86%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  locationDivAddis: {
    position: "absolute",
    right: "48%",
    top: "86%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesHover: {
    display: "none",
  },
  zIndexUp: {
    zIndex: "200",
  },

  displayNone: {
    display: "none",
  },
  imageProperty: {
    display: "block",
    position: "absolute",
    zIndex: "100",
    top: "-270px",
    left: "-350px",
  },
  locationStar: {
    cursor: "pointer",
  },
  flexElement: {
    display: "flex",
    position: "relative",
  },
  mainDots: {
    marginRight: "20px",
  },
  "@media screen and (max-width: 1380px)": {
    locationDivShanghai: {
      right: "12%",
      top: "57%",
    },
    locationDivZhejiang: {
      right: "12.5%",
      top: "63%",
    },
    locationDivJiangsu: {
      right: "14%",
      top: "49%",
    },
    locationDivAnhui: {
      right: "22%",
      top: "58%",
    },
    locationDivShandong: {
      right: "23%",
      top: "42%",
    },
    locationDivHenan: {
      right: "27%",
      top: "46%",
    },

    locationDivDhaka: {
      right: "58.5%",
      top: "86%",
    },

    locationDivAddis: {
      right: "48%",
      top: "86%",
    },
  },
  "@media screen and (max-width: 1300px)": {
    locationDivShanghai: {
      right: "13%",
      top: "57%",
    },
    locationDivZhejiang: {
      right: "13.5%",
      top: "63%",
    },
    locationDivJiangsu: {
      right: "15%",
      top: "49%",
    },
    locationDivAnhui: {
      right: "23%",
      top: "58%",
    },
    locationDivShandong: {
      right: "24%",
      top: "42%",
    },
    locationDivHenan: {
      right: "28%",
      top: "46%",
    },

    locationDivDhaka: {
      right: "58.5%",
      top: "86%",
    },

    locationDivAddis: {
      right: "48%",
      top: "86%",
    },
  },
  "@media screen and (max-width: 1200px)": {
    locationDivShanghai: {
      right: "14%",
      top: "57%",
    },
    locationDivZhejiang: {
      right: "14.5%",
      top: "63%",
    },
    locationDivJiangsu: {
      right: "16%",
      top: "49%",
    },
    locationDivAnhui: {
      right: "25%",
      top: "58%",
    },
    locationDivShandong: {
      right: "26%",
      top: "42%",
    },
    locationDivHenan: {
      right: "31%",
      top: "46%",
    },

    locationDivDhaka: {
      right: "58.5%",
      top: "86%",
    },

    locationDivAddis: {
      right: "48%",
      top: "86%",
    },
  },
  "@media screen and (max-width: 1150px)": {
    locationDivShanghai: {
      right: "15%",
      top: "57%",
    },
    locationDivZhejiang: {
      right: "15.5%",
      top: "63%",
    },
    locationDivJiangsu: {
      right: "17%",
      top: "49%",
    },
    locationDivAnhui: {
      right: "27%",
      top: "58%",
    },
    locationDivShandong: {
      right: "29%",
      top: "42%",
    },
    locationDivHenan: {
      right: "34%",
      top: "46%",
    },

    locationDivDhaka: {
      right: "58.5%",
      top: "86%",
    },

    locationDivAddis: {
      right: "48%",
      top: "86%",
    },
  },
  "@media screen and (max-width: 1080px)": {
    locationDivShanghai: {
      right: "16%",
      top: "57%",
    },
    locationDivZhejiang: {
      right: "16.5%",
      top: "63%",
    },
    locationDivJiangsu: {
      right: "18%",
      top: "49%",
    },
    locationDivAnhui: {
      right: "29%",
      top: "58%",
    },
    locationDivShandong: {
      right: "31%",
      top: "42%",
    },
    locationDivHenan: {
      right: "37%",
      top: "46%",
    },

    locationDivDhaka: {
      right: "58.5%",
      top: "86%",
    },

    locationDivAddis: {
      right: "48%",
      top: "86%",
    },
  },

  "@media screen and (max-width: 980px)": {
    locationDivShanghai: {
      right: "11%",
      top: "57%",
    },
    locationDivZhejiang: {
      right: "11.5%",
      top: "63%",
    },
    locationDivJiangsu: {
      right: "15%",
      top: "48%",
    },
    locationDivAnhui: {
      right: "26%",
      top: "58%",
    },
    locationDivShandong: {
      right: "27%",
      top: "42%",
    },
    locationDivHenan: {
      right: "32%",
      top: "46%",
    },

    mapDiv: {
      "& > img": {
        maxWidth: "80%",
        display: "block",
        paddingRight: "50px",
      },
    },
    tagline: {
      textAlign: "center",
      maxWidth: "80%",
      paddingLeft: "0",
      display: "block",
      margin: "0 auto",
    },
  },

  "@media screen and (max-width: 860px)": {
    locationDivDhaka: {
      right: "83.5%",
      top: "94%",
    },
    locationDot: { width: "15px", height: "15px" },

    locationDivAddis: {
      right: "5%",
      top: "86%",
    },
    locationDivDhaka: {
      right: "18%",
      top: "86%",
    },
  },
  "@media screen and (max-width: 820px)": {
    locationDivShanghai: {
      right: "11%",
      top: "57%",
    },
    locationDivZhejiang: {
      right: "11.5%",
      top: "63%",
    },
    locationDivJiangsu: {
      right: "15%",
    },
    locationDivAnhui: {
      right: "26%",
      top: "58%",
    },
    locationDivShandong: {
      right: "28%",
      top: "42%",
    },
    locationDivHenan: {
      right: "32%",
      top: "46%",
    },
    locationDivAddis: {
      right: "5%",
      top: "80%",
    },
    locationDivDhaka: {
      right: "18%",
      top: "80%",
    },
  },

  "@media screen and (max-width: 775px)": {
    locationDivShanghai: {
      right: "11%",
      top: "55%",
    },
    locationDivZhejiang: {
      right: "11.5%",
      top: "61%",
    },
    locationDivJiangsu: {
      right: "15%",
      top: "47%",
    },
    locationDivAnhui: {
      right: "28%",
      top: "58%",
    },
    locationDivShandong: {
      right: "29%",
      top: "37%",
    },
    locationDivHenan: {
      right: "35%",
      top: "46%",
    },
    locationDotZhejiang: {
      right: "140%",
      top: "0%",
    },

    locationDotJiangsu: {
      right: "140%",
      top: "30%",
    },

    locationDotAnhui: {
      right: "10%",
      top: "-30%",
    },
    locationDotShanghai: {
      top: "0%",
    },
    locationDotShandong: {
      position: "absolute",
      cursor: "pointer",

      right: "0%",
      top: "110%",
    },

    locationDotHenan: {
      position: "absolute",
      right: "0%",
      top: "110%",
    },
  },
  "@media screen and (max-width: 650px)": {
    locationDivAddis: {
      right: "5%",
      top: "80%",
      transform: "scale(0.75)",
    },
    locationDivDhaka: {
      right: "18%",
      top: "80%",
      transform: "scale(0.75)",
    },
    locationDot: { width: "10px", height: "10px" },
    locationDivShanghai: {
      right: "11%",
      top: "55%",
    },
    locationDivZhejiang: {
      right: "11.5%",
      top: "60%",
    },
    locationDivJiangsu: {
      right: "15%",
      top: "47%",
    },
    locationDivAnhui: {
      right: "30%",
      top: "58%",
    },
    locationDivShandong: {
      right: "31%",
      top: "37%",
    },
    locationDivHenan: {
      right: "38%",
      top: "46%",
    },
    imageProperty: {
      width: "300px",
      marginTop: "60px",
      marginLeft: "60px",
    },
  },
  "@media screen and (max-width: 560px)": {
    mapDiv: {
      fontSize: "14px",
    },
    tagline: {
      fontSize: "28px",
    },
    locationDivShanghai: {
      right: "14%",
      top: "53%",
    },
    locationDivZhejiang: {
      right: "14.5%",
      top: "58%",
    },
    locationDivJiangsu: {
      right: "16%",
      top: "45%",
    },
    locationDivAnhui: {
      right: "31%",
      top: "54%",
    },
    locationDivShandong: {
      right: "33%",
      top: "34%",
    },
    locationDivHenan: {
      right: "40%",
      top: "41%",
    },
    info: {
      paddingLeft: "0",
      textAlign: "center",
      fontSize: "18px",
    },
    infoDesc: {
      paddingLeft: "0",
      fontSize: "14px",

      textAlign: "center",
      paddingBottom: "10px",
    },
  },
  "@media screen and (max-width: 490px)": {
    locationDivShanghai: {
      right: "14%",
      top: "52%",
    },
    locationDivZhejiang: {
      right: "14.5%",
      top: "57%",
    },
    imageProperty: {
      width: "200px",
      marginTop: "150px",
      marginLeft: "150px",
    },
    locationDivJiangsu: {
      right: "17%",
      top: "43%",
    },
    locationDivAnhui: {
      right: "33%",
      top: "54%",
    },
    locationDivShandong: {
      right: "35%",
      top: "34%",
    },
    locationDivHenan: {
      right: "42%",
      top: "41%",
    },
    locationDivAddis: {
      right: "5%",
      top: "75%",
      transform: "scale(0.75)",
    },
    locationDivDhaka: {
      right: "18%",
      top: "75%",
      transform: "scale(0.75)",
    },
  },
  "@media screen and (max-width: 420px)": {
    tagline: {
      fontSize: "24px",
    },
    locationDot: {
      width: "5px",
      height: "5px",
    },
    locationDivShanghai: {
      right: "14%",
      top: "52%",
    },
    locationDivZhejiang: {
      right: "14.5%",
      top: "57%",
    },
    locationDivJiangsu: {
      right: "17%",
      top: "43%",
    },
    locationDivAnhui: {
      right: "35%",
      top: "54%",
    },
    locationDivShandong: {
      right: "37%",
      top: "34%",
    },
    locationDivHenan: {
      right: "45  %",
      top: "41%",
    },
    locationDivAddis: {
      right: "5%",
      top: "75%",
      transform: "scale(0.75)",
    },
    locationDivDhaka: {
      right: "25%",
      top: "75%",
      transform: "scale(0.75)",
    },
  },
});

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const SupplyChain = () => {
  const classes = useStyles();
  const [anhuiHover, setAnhuiHover] = useState(false);
  const [bangladeshHover, setBangladeshHover] = useState(false);
  const [ethopiaHover, setEthopiaHover] = useState(false);
  const [henanHover, setHenanHover] = useState(false);
  const [jiangsuHover, setJiangsuHover] = useState(false);
  const [shandongHover, setShangdongHover] = useState(false);
  const [shanghaiHover, setShanghaiHover] = useState(false);
  const [zhejiangHover, setZhejiangHover] = useState(false);

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

        <div className={classes.mainDots}>
          <div className={classes.moveDots}>
            <div className={`${classes.locationDivShanghai}`}>
              <motion.img
                animate={shanghaiHover ? "open" : "closed"}
                variants={variants}
                src={shanghai}
                alt=""
                transition={{ duration: 0.5 }}
                animate={shanghaiHover ? { scale: 1 } : { scale: 0 }}
                onMouseEnter={() => setShanghaiHover(true)}
                onMouseLeave={() => setShanghaiHover(false)}
                className={`${
                  shanghaiHover ? classes.imageProperty : classes.displayNone
                } `}
              />
              <div className={classes.flexElement}>
                <div
                  className={`${classes.locationDot} ${classes.locationDotShanghai} `}
                  onMouseEnter={() => setShanghaiHover(true)}
                  onMouseLeave={() => setShanghaiHover(false)}
                />
                <p
                  className={classes.locationName}
                  style={{ color: "white" }}
                  onMouseEnter={() => setShanghaiHover(true)}
                  onMouseLeave={() => setShanghaiHover(false)}
                >
                  Shanghai
                </p>
              </div>
            </div>
            <div className={`${classes.locationDivZhejiang}`}>
              <motion.img
                animate={zhejiangHover ? "open" : "closed"}
                variants={variants}
                src={zhejiang}
                alt=""
                transition={{ duration: 0.5 }}
                animate={zhejiangHover ? { scale: 1 } : { scale: 0 }}
                onMouseEnter={() => setZhejiangHover(true)}
                onMouseLeave={() => setZhejiangHover(false)}
                className={`${
                  zhejiangHover ? classes.imageProperty : classes.displayNone
                } `}
              />
              <div className={classes.flexElement}>
                <div
                  className={`${classes.locationDot} ${classes.locationDotZhejiang} `}
                  onMouseEnter={() => setZhejiangHover(true)}
                  onMouseLeave={() => setZhejiangHover(false)}
                />
                <p
                  className={classes.locationName}
                  style={{ color: "white" }}
                  onMouseEnter={() => setZhejiangHover(true)}
                  onMouseLeave={() => setZhejiangHover(false)}
                >
                  Zhejiang
                </p>
              </div>
            </div>
            <div className={`${classes.locationDivJiangsu}`}>
              <motion.img
                animate={jiangsuHover ? "open" : "closed"}
                variants={variants}
                src={jiangsu}
                alt=""
                transition={{ duration: 0.5 }}
                animate={jiangsuHover ? { scale: 1 } : { scale: 0 }}
                onMouseEnter={() => setJiangsuHover(true)}
                onMouseLeave={() => setJiangsuHover(false)}
                className={`${
                  jiangsuHover ? classes.imageProperty : classes.displayNone
                } `}
              />
              <div className={classes.flexElement}>
                <div
                  className={`${classes.locationDot} ${classes.locationDotJiangsu} `}
                  onMouseEnter={() => setJiangsuHover(true)}
                  onMouseLeave={() => setJiangsuHover(false)}
                />
                <p
                  className={classes.locationName}
                  style={{ color: "white" }}
                  onMouseEnter={() => setJiangsuHover(true)}
                  onMouseLeave={() => setJiangsuHover(false)}
                >
                  Jiangsu
                </p>
              </div>
            </div>
            <div className={`${classes.locationDivAnhui}`}>
              <motion.img
                animate={anhuiHover ? "open" : "closed"}
                variants={variants}
                src={anhui}
                alt=""
                transition={{ duration: 0.5 }}
                animate={anhuiHover ? { scale: 1 } : { scale: 0 }}
                onMouseEnter={() => setAnhuiHover(true)}
                onMouseLeave={() => setAnhuiHover(false)}
                className={`${
                  anhuiHover ? classes.imageProperty : classes.displayNone
                } `}
              />
              <div
                className={`${classes.locationDot} ${classes.locationDotAnhui} `}
                onMouseEnter={() => setAnhuiHover(true)}
                onMouseLeave={() => setAnhuiHover(false)}
              />
              <p
                className={classes.locationName}
                style={{ color: "#000" }}
                onMouseEnter={() => setAnhuiHover(true)}
                onMouseLeave={() => setAnhuiHover(false)}
              >
                Anhui
              </p>
            </div>
            <div className={`${classes.locationDivShandong} `}>
              <motion.img
                animate={shandongHover ? "open" : "closed"}
                variants={variants}
                src={shandong}
                alt=""
                transition={{ duration: 0.5 }}
                animate={shandongHover ? { scale: 1 } : { scale: 0 }}
                onMouseEnter={() => setShangdongHover(true)}
                onMouseLeave={() => setShangdongHover(false)}
                className={`${
                  shandongHover ? classes.imageProperty : classes.displayNone
                } `}
              />
              <div
                className={`${classes.locationDot} ${classes.locationDotShandong} `}
                onMouseEnter={() => setShangdongHover(true)}
                onMouseLeave={() => setShangdongHover(false)}
              />
              <p
                className={classes.locationName}
                style={{ color: "#000" }}
                onMouseEnter={() => setShangdongHover(true)}
                onMouseLeave={() => setShangdongHover(false)}
              >
                Shandong
              </p>
            </div>
            <div className={`${classes.locationDivHenan}`}>
              <motion.img
                animate={henanHover ? "open" : "closed"}
                variants={variants}
                src={henan}
                alt=""
                transition={{ duration: 0.5 }}
                animate={henanHover ? { scale: 1 } : { scale: 0 }}
                onMouseEnter={() => setHenanHover(true)}
                onMouseLeave={() => setHenanHover(false)}
                className={`${
                  henanHover ? classes.imageProperty : classes.displayNone
                } `}
              />
              <div
                className={`${classes.locationDot} ${classes.locationDotHenan} `}
                onMouseEnter={() => setHenanHover(true)}
                onMouseLeave={() => setHenanHover(false)}
              />
              <p
                className={classes.locationName}
                style={{ color: "#000" }}
                onMouseEnter={() => setHenanHover(true)}
                onMouseLeave={() => setHenanHover(false)}
              >
                Henan
              </p>
            </div>
          </div>
        </div>
        <div className={`${classes.locationDivDhaka}`}>
          <motion.img
            animate={bangladeshHover ? "open" : "closed"}
            variants={variants}
            src={bangladesh}
            alt=""
            transition={{ duration: 0.5 }}
            animate={bangladeshHover ? { scale: 1 } : { scale: 0 }}
            onMouseEnter={() => setBangladeshHover(true)}
            onMouseLeave={() => setBangladeshHover(false)}
            className={`${
              bangladeshHover ? classes.imageProperty : classes.displayNone
            } `}
          />

          <img
            src={locationStar}
            className={`${classes.locationStar}`}
            onMouseEnter={() => setBangladeshHover(true)}
            onMouseLeave={() => setBangladeshHover(false)}
          />
          <p
            className={classes.locationName}
            style={{ color: "#fff" }}
            onMouseEnter={() => setBangladeshHover(true)}
            onMouseLeave={() => setBangladeshHover(false)}
          >
            Dhaka,
          </p>
          <p
            className={classes.locationName}
            style={{ color: "#fff" }}
            onMouseEnter={() => setBangladeshHover(true)}
            onMouseLeave={() => setBangladeshHover(false)}
          >
            Bangladesh
          </p>
        </div>
        <div className={`${classes.locationDivAddis}`}>
          <motion.img
            animate={ethopiaHover ? "open" : "closed"}
            variants={variants}
            src={ethopia}
            alt=""
            transition={{ duration: 0.5 }}
            animate={ethopiaHover ? { scale: 1 } : { scale: 0 }}
            onMouseEnter={() => setEthopiaHover(true)}
            onMouseLeave={() => setEthopiaHover(false)}
            className={`${
              ethopiaHover ? classes.imageProperty : classes.displayNone
            } `}
          />

          <img
            src={locationStar}
            className={`${classes.locationStar}`}
            onMouseEnter={() => setEthopiaHover(true)}
            onMouseLeave={() => setEthopiaHover(false)}
          />
          <p
            className={classes.locationName}
            style={{ color: "#fff" }}
            onMouseEnter={() => setEthopiaHover(true)}
            onMouseLeave={() => setEthopiaHover(false)}
          >
            Addis Ababa,
          </p>
          <p
            className={classes.locationName}
            style={{ color: "#fff" }}
            onMouseEnter={() => setEthopiaHover(true)}
            onMouseLeave={() => setEthopiaHover(false)}
          >
            Ethopia
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
