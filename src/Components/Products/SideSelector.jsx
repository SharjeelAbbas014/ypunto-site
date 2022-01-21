import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Link, useLocation } from "react-router-dom";

const useStyles = createUseStyles({
  sideSelector: {
    marginTop: 70,
  },
  line: {
    width: 189,
    borderTop: "1px solid #000",
    marginTop: 8,
  },
  selectorTitle: {
    fontSize: 24,
    lineHeight: "36px",
    fontFamily: "NewSpirit500",
  },
  selectionList: {
    listStyleType: "none",
    marginTop: 26,
    "& a": {
      fontFamily: "Proxima400",
      fontSize: 18,
      lineHeight: "27px",
      color: "#000",
      textDecoration: "none",
    },
  },
});

const SideSelector = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(0);
  // const is500 = useMediaQuery({ query: "(max-width: 500px)" });
  const isActiveCheck = () => {
    switch (location.pathname) {
      case "/products/women":
        setIsActive(1);
        break;
      case "/products/men":
        setIsActive(2);
        break;
      case "/products/kids":
        setIsActive(3);
        break;
      case "/products/home-textiles":
        setIsActive(4);
        break;
      case "/products/home-wear":
        setIsActive(5);
        break;
      case "/products/accessories":
        setIsActive(6);
        break;
      default:
    }
  };
  useEffect(() => {
    isActiveCheck();
  }, [location.pathname]);
  const classes = useStyles();
  return (
    <div className={classes.sideSelector}>
      <p className={classes.selectorTitle}>Products</p>
      <div className={classes.line} />
      <ul className={classes.selectionList}>
        <li>
          <Link
            to="/products/women"
            style={{
              fontFamily: isActive === 1 ? "Proxima700" : "Proxima400",
            }}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            style={{
              fontFamily: isActive === 2 ? "Proxima700" : "Proxima400",
            }}
            to="/products/men"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            to="/products/kids"
            style={{
              fontFamily: isActive === 3 ? "Proxima700" : "Proxima400",
            }}
          >
            Kids
          </Link>
        </li>
        <li>
          <Link
            to="/products/home-textiles"
            style={{
              fontFamily: isActive === 4 ? "Proxima700" : "Proxima400",
            }}
          >
            Home Textiles
          </Link>
        </li>
        <li>
          <Link
            to="/products/home-wear"
            style={{
              fontFamily: isActive === 5 ? "Proxima700" : "Proxima400",
            }}
          >
            Home Wear
          </Link>
        </li>
        <li>
          <Link
            to="/products/accessories"
            style={{
              fontFamily: isActive === 6 ? "Proxima700" : "Proxima400",
            }}
          >
            Accessories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideSelector;
