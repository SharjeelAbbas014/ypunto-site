import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import envImg from "../../assets/images/impact/certified/bkg.png";

const useStyles = createUseStyles({
  wrapper: {},
  title: {
    fontFamily: "NewSpirit400",
    fontSize: "36px",
    lineHeight: "45px",
    color: "#c29B81",
    textAlign: "center",
    padding: "0 16px",
    paddingTop: 34,
  },
  btn: {
    background: "#54563D",
    borderRadius: "15px",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "Proxima400",
    fontSize: "18px",
    lineHeight: "22px",
    padding: "19px 17px",
  },
  info: {
    maxWidth: 502,
    fontFamily: "Proxima400",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000",
    paddingBottom: 56,
  },
  infoAndLogos: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "32px",
  },
  infoLogosBtn: {
    // display: "flex",
  },
  logosDiv: {
    maxWidth: 642,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  envDiv: {
    paddingTop: "49px",
    paddingBottom: "49px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  envImage: {
    width: "100%",
  },
  envContent: {
    textAlign: "left",
    position: "absolute",
    background: "#E3DACF",
    maxWidth: 1022,
  },
  envTitle: {
    fontFamily: "NewSpirit400",
    fontSize: "36px",
    lineHeight: "45px",
    color: "#4f6867",
    padding: "77px 68px 0 105px",
  },
  envPara: {
    fontFamily: "Proxima400",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000",
    padding: "77px 68px 76px 105px",
    paddingTop: 30,
  },
});
const logos = [
  {
    id: 1,
    imgPath: "a",
  },
  {
    id: 2,
    imgPath: "b",
  },
  {
    id: 3,
    imgPath: "c",
  },
  {
    id: 4,
    imgPath: "d",
  },
  {
    id: 5,
    imgPath: "e",
  },
  {
    id: 6,
    imgPath: "f",
  },
  {
    id: 7,
    imgPath: "g",
  },
];

const Certified = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>
        Always Work With Certified Textiles And Factories{" "}
      </p>
      <div className={classes.infoAndLogos}>
        <div className={classes.infoAndBtn}>
          <p className={classes.info}>
            To ensure and enforce our core values of sustainability,
            transparency, and fair trade, we only partner and work with textiles
            and factories that are certified, adhering to industry standards.
          </p>
          <Link to="/supplychain" className={classes.btn}>
            Our fair supply chain
          </Link>
        </div>
        <div className={classes.logosDiv}>
          {logos.map((logo) => (
            <img
              src={require(`../../assets/images/impact/certified/${logo.imgPath}.png`)}
            />
          ))}
        </div>
      </div>
      <div className={classes.envDiv}>
        <img className={classes.envImage} src={envImg} />
        <div className={classes.envContent}>
          <p className={classes.envTitle}>
            Measure And Offset Our Environmental Trace
          </p>
          <p className={classes.envPara}>
            No matter what we do, our products will still have an impact on the
            environment. Measuring that impact is critical to reducing it.
            Offsetting our footprints is essential to achieving neutrality.
            Looking for circularity and end-of-life options for your products,
            the only way towards a true zero waste company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certified;
