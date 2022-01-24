import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import cardAImg from "../../assets/images/impact/sustain/a.png";
import cardBImg from "../../assets/images/impact/sustain/b.png";

const useStyles = createUseStyles({
  wrapper: {
    background: "#E3DACF",
    textAlign: "center",
  },
  cards: {
    maxWidth: 1040,
    display: "flex",
    justifyContent: "space-between",
    padding: "59px 16px",
    margin: "0 auto",
    flexWrap: "wrap",
    "@media(max-width:880px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    fontFamily: "NewSpirit400",
    fontSize: "36px",
    lineHEight: "45px",
    color: "#54563D",
    "&:nth-child(1)": {
      paddingTop: "82px",
    },
    "&:nth-child(2)": {
      paddingTop: "18px",
    },
  },
  card: {
    background: "#fff",
    borderRadius: "15px",
    "& ul": {
      listStyleType: "none",
      paddingBottom: "49px",
    },
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000",
    "@media(max-width:880px)": {
      "&:nth-child(2)": {
        marginTop: 64,
      },
    },
    "@media(max-width:445px)": {
      "& img": {
        width: "100%",
      },
      "& ul": {
        paddingBottom: "24px",
      },
    },
  },
  cardTitle: {
    fontFamily: "NewSpirit400",
    paddingTop: "40px",
    paddingBottom: "49px",
    "@media(max-width:445px)": {
      padding: "16px",
    },
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
  btnDiv: {
    paddingBottom: "90px",
  },
});

const Sustain = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>How do we KNIT for the Earth?</p>
      <p className={classes.title}>Sustainable fibers make the best knits.</p>
      <div className={classes.cards}>
        <div className={classes.card}>
          <img src={cardAImg} />
          <p className={classes.cardTitle}>Organic Natural Yarns</p>
          <ul>
            <li>Organic cotton</li>
            <li>Paper</li>
            <li>Linen</li>
            <li>Wool</li>
            <li>Ecovero</li>
            <li>Corn fiber</li>
          </ul>
        </div>
        <div className={classes.card}>
          <img src={cardBImg} />
          <p className={classes.cardTitle}>Certified Recycled Yarns</p>
          <ul>
            <li>Recycled cotton</li>
            <li>Recycled Polyester</li>
            <li>Recycled acrylic</li>
            <li>Recycled nylon</li>
          </ul>
        </div>
      </div>
      <div className={classes.btnDiv}>
        <Link to="/products" className={classes.btn}>
          Check out our products
        </Link>
      </div>
    </div>
  );
};

export default Sustain;
