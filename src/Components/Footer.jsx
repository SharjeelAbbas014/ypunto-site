import React from "react";
import { createUseStyles } from "react-jss";
import instagramIcon from "../assets/images/shared/instagram.png";
import linkedinIcon from "../assets/images/shared/linkedin.png";
const useStyles = createUseStyles({
  container: {
    width: "100%",
    backgroundColor: "#E3DACF",
  },
  wrapper: {
    maxWidth: 1240,
    margin: "0 auto",
    height: 221,
    position: "relative",
    bottom: 0,
    padding: "0 16px",
    fontFamily: "Proxima400",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    lineHeight: "150%",
  },
  desp: {
    fontSize: 14,
    lineHeight: "150%",
  },
  images: {
    width: 85,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingBottom: 12,
  },
  linkedinIcon: {
    width: 40,
  },
  instagramIcon: {
    width: 31,
  },
});

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <p className={classes.title}>Contact Us</p>
        <div className={classes.images}>
          <img
            src={linkedinIcon}
            alt="Linkedin"
            className={classes.linkedinIcon}
          />
          <img
            src={instagramIcon}
            alt="Instagram"
            className={classes.instagramIcon}
          />
        </div>
        <p className={classes.title}>Privacy Policy</p>
        <p className={classes.desp}>
          © 2022 Y Punto (business license [ ]). Registered in{" "}
        </p>
        <p className={classes.desp}>China. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
