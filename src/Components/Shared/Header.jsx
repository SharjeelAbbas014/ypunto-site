import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
//asset imports
import logo from "../../Assets/Shared/nest-logofull.png";

const useStyles = createUseStyles({
  wrapper: {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: {
      top: "25px",
      bottom: "25px",
      right: "105px",
      left: "105px",
    },
  },
  navigation: {
    width: "460px",
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    "& li": {
      color: "#000000",
      padding: "10px",
      fontFamily: "Neue400",
      fontSize: "18px",
      lineHeight: "27px",
      "& a": {
        color: "#000",
        textDecoration: "none",
        "&::active": {
          color: "#4F6867",
        },
      },
    },
  },
  navActive: {},
  burger: {
    display: "none",
  },
  "@media (max-width: 768px)": {
    navigation: {
      display: "none",
    },
    burger: {
      "& div": {
        width: "40px",
        borderRadius: "200px",
        height: "3px",
        backgroundColor: "#000",
        margin: "7px 0px",
      },
      display: "block",
      cursor: "pointer",
    },
  },
  "@media (max-width: 500px)": {
    wrapper: {
      padding: {
        top: "25px",
        bottom: "25px",
        right: "15px",
        left: "15px",
      },
    },
  },
  close: {
    "& div": {
      width: "40px",
      borderRadius: "200px",
      height: "3px",
      backgroundColor: "#fff",
    },
    display: "block",
    cursor: "pointer",
    position: "absolute",
    top: "30px",
    zIndex: "1000",
    right: "50px",
    height: "max-content",
  },
  pin1: {
    transform: "rotate(45deg)",
    top: "10px",
    position: "absolute",
    right: "-10px",
    cursor: "pointer",
  },
  pin2: {
    transform: "rotate(135deg)",
    cursor: "pointer",
    top: "10px",
    right: "-10px",
    position: "absolute",
  },
  navPopUp: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#4F6867",
    position: "fixed",
    zIndex: "100",
    top: "0",
    left: "0",
  },
  mobileNavigation: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    "& li": {
      color: "#fff",
      padding: "10px",
      fontFamily: "Neue400",
      fontSize: "36px",
      lineHeight: "50px",
      "& a": {
        color: "#fff",
        textDecoration: "none",
        "&::active": {
          color: "#4F6867",
        },
      },
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const [nav, setNav] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div className={classes.logoDiv}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={classes.navigation}>
        <li>
          <Link to="/solutions" activeClassName={classes.navActive}>
            Solutions
          </Link>
        </li>
        <li>
          <Link to="about" activeClassName={classes.navActive}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName={classes.navActive}>
            Contact
          </Link>
        </li>
      </div>
      <div className={classes.burger} onClick={() => setNav(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {nav == true ? (
        <div className={classes.navPopUp}>
          <div className={classes.close} onClick={() => setNav("false")}>
            <div className={classes.pin1}></div>
            <div className={classes.pin2}></div>
          </div>
          <div className={classes.mobileNavigation}>
            <li>
              <Link
                to="/solutions"
                activeClassName={classes.navActive}
                onClick={() => setNav(false)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClassName={classes.navActive}
                onClick={() => setNav(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                activeClassName={classes.navActive}
                onClick={() => setNav(false)}
              >
                Contact
              </Link>
            </li>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
