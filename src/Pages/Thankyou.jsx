import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  wrapper: { textAlign: "center" },
  card: {
    maxWidth: "512px",
    margin: "0 auto",
    padding: "90px",
    background: "#E3DACF",
    marginBottom: 54,
    "@media(max-width:560px)": {
      maxWidth: "unset",
      width: "unset",
      padding: "48px 16px",
    },
  },
  title: {
    maxWidth: "315px",
    margin: "0 auto",
    fontFamily: "NewSpirit400",
    fontSize: "36px",
    lineHeight: "45px",
  },
  descp: {
    maxWidth: "340px",
    margin: "0 auto",
    paddingTop: 34,
    paddingBottom: 54,
    fontFamily: "Proxima400",
    fontSize: 24,
    lineHeight: "30px",
  },
  btn: {
    padding: "19px 54px",
    background: "#54563D",
    color: "white",
    textDecoration: "none",
    borderRadius: "15px",
  },
});

const Thankyou = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <p className={classes.title}>Thanks for your Submission!</p>
        <p className={classes.descp}>
          We'll review your message and get back to you shortly.
        </p>
        <Link to="/" className={classes.btn}>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
