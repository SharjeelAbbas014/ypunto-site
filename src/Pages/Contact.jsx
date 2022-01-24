import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import sideImage from "../assets/images/contact/promise.png";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width:1024px)": {
      flexDirection: "column",
    },
  },
  leftDiv: {
    position: "relative",
    width: "44%",
    "@media(max-width:1440px)": {
      "& img": {
        width: "44vw",
      },
    },

    "@media(max-width:1024px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
      width: "100%",
      "& img": {
        width: "100%",
        height: 300,
        objectFit: "cover",
      },
    },
  },
  sideTitle: {
    position: "absolute",
    top: "9%",
    left: "14%",
    fontFamily: "NewSpirit400",
    fontSize: "64px",
    lineHeight: "80px",
    maxWidth: "316px",
    color: "#54563D",
    "& span": {
      fontSize: 36,
      lineHeight: "45px",
    },
    "@media(max-width:1024px)": {
      top: "unset",
      maxWidth: "unset",
      left: "unset",
      textAlign: "center",
      fontSize: "46px",
      lineHeight: "64px",
    },
    "@media(max-width:626px)": {
      fontSize: "36px",
      lineHeight: "46px",
      padding: "0 26px",
    },
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-start",
    maxWidth: 605,
    padding: "0 16px",
    "@media(max-width:1440px)": {
      width: "46vw",
    },
    "@media(max-width:1024px)": {
      width: "unset",
    },
  },
  formDivWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "46px",
  },
  formTitle: {
    fontFamily: "NewSpirit400",
    color: "#C29B81",
    fontSize: "36px",
    lineHeight: "45px",
    paddingTop: "43px",
    paddingBottom: "43px",
  },
  formInput: {
    border: "none",
    borderBottom: "1px solid #4F6867",
    fontFamily: "Proxima400",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#000",
    padding: "7px 7px 7px 0",
    "&::placeholder": {
      color: "#000",
    },
    marginBottom: "43px",
  },
  msgInputDiv: {
    display: "flex",
    flexDirection: "column",
    "& label": {
      paddingBottom: "11px",
      fontFamily: "Proxima400",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#000",
    },
    "& textarea": {
      height: 200,
      border: "1px solid #4F6867",
      borderRadius: "15px",
      fontFamily: "Proxima400",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#000",
      padding: "7px",
      marginBottom: "43px",
    },
  },
  sendDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "@media(max-width:626px)": {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      "& div > p": {
        padding: "0 46px",
      },
      "& a": {
        marginTop: "26px",
      },
    },
  },
  agreeText: {
    "& p": {
      // width: 200,
      paddingRight: 110,
    },
    fontFamily: "Proxima400",
    fontSize: "12px",
    lineHeight: "18px",
  },
  btn: {
    background: "#54563D",
    borderRadius: "15px",
    padding: "19px 82px",
    fontFamily: "Proxima400",
    fontSize: "18px",
    lineHeight: "22px",
    textDecoration: "none",
    color: "#fff",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftDiv}>
        <img src={sideImage} alt="promise" />
        <p className={classes.sideTitle}>
          Are you ready for BETTER KNITS? <span>Let's talk!</span>
        </p>
      </div>
      <div className={classes.formDivWrapper}>
        <div className={classes.formDiv}>
          <p className={classes.formTitle}>Contact Us</p>
          <input placeholder="Name" type="text" className={classes.formInput} />
          <input
            placeholder="Email"
            type="email"
            className={classes.formInput}
          />

          <div className={classes.msgInputDiv}>
            <label>Message</label>
            <textarea />
          </div>
          <div className={classes.sendDiv}>
            <div className={classes.agreeText}>
              <p>
                By registering, you confirm that you agree to the storing and
                processing of your personal data by Y Punto as described in the
                Privacy policy
              </p>
            </div>
            <Link to="/thankyou" className={classes.btn}>
              Send
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
