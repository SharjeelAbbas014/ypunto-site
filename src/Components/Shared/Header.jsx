import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/shared/logo.png";
import menuBtn from "../../assets/images/shared/menu.png";
const useStyles = createUseStyles({
  container: {
    width: "100%",
    backgroundColor: "#fff",
  },
  wrapper: {
    maxWidth: 1240,
    height: 148,
    margin: "0 auto",
    paddingRight: 16,
    paddingLeft: 16,
    "@media(max-width:570px)": {
      height: 124,
    },
    "@media(max-width:500px)": {
      height: 96,
    },
  },
  fsbc: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },
  navItemsWrapper: {
    // width: "100%",
    // backgroundColor: "green",
  },
  navItems: {
    width: 423,
    fontFamily: "Proxima400",
    "& li": {
      listStyleType: "none",
    },
    "& a": {
      textDecoration: "none",
      fontSize: 18,
      lineHeight: "22px",
      color: "black",
    },
    "@media(max-width:570px)": {
      width: 353,
    },
    "@media(max-width:500px)": {
      display: "none",
    },
  },
  navItemsMobile: {
    backgroundColor: "black",
    fontFamily: "Proxima400",
    "& li": {
      listStyleType: "none",
    },
    "& a": {
      textDecoration: "none",
      fontSize: 18,
      // lineHeight: 22,
      color: "white",
    },
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    margin: "8px auto",
  },
  logo: {
    "@media(max-width:500px)": {
      width: 70,
    },
  },
  menuBtn: {
    display: "none",
    "@media(max-width:500px)": {
      display: "block",
    },
  },
  navItemsMobileWrapper: {
    zIndex: 100,
    visibility: "hidden",
    position: "absolute",
    backgroundColor: "black",
    top: "0px",
    opacity: 0,
    width: "100%",
    transition: "all 0.5s cubic-bezier(0, 0, 0, 0.99) ",
  },
});
const Header = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const is500 = useMediaQuery({ query: "(max-width: 500px)" });
  const isActiveCheck = () => {
    location.pathname === "p" && setIsActive(4);
    switch (location.pathname) {
      case "/":
        setIsActive(1);
        break;
        case "/about":
          setIsActive(2);
          break;
          case "/impact":
            setIsActive(3);
        break;
      case "/products":
        setIsActive(4);
        break;
      case "/contact":
        setIsActive(5);
        break;
      default:
    }
  };
  useEffect(() => {
    isActiveCheck();
    setShowMenu(false);
  }, [location.pathname]);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.wrapper} ${classes.fsbc}`}>
        <Link to="/">
          <img className={classes.logo} src={logo} />
        </Link>
        <div className={`${classes.navItemsWrapper}`}>
          <div className={`${classes.navItems} ${classes.fsbc}`}>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 2 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 3 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/impact"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 4 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 5 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </div>
        </div>
        <img className={classes.menuBtn} src={menuBtn} onClick={toggleMenu} />
      </div>
      {is500 && (
        <div
          className={classes.navItemsMobileWrapper}
          style={{
            top: showMenu ? "98px" : "0px",
            opacity: showMenu ? 1 : 0,
            visibility: showMenu ? "visible" : "hidden",
          }}
        >
          <div className={classes.navItemsMobile}>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 2 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 3 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/impact"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 4 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                style={{
                  fontFamily: `${isActive === 5 ? "Proxima700" : "Proxima400"}`,
                }}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
