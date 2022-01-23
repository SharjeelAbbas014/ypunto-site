import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  wrapper: {},
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    // flexWrap: "wrap",
    "& >img": {
      maxWidth: "50vw",
    },
    "&:nth-child(2)": {
      flexDirection: "row-reverse",
    },
    "@media(max-width:1100px)": {
      flexDirection: "column",
      "& >img": {
        maxWidth: "100%",
      },
      "&:nth-child(2)": {
        flexDirection: "column",
      },
    },
  },

  contentWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: 502,
    padding: "38px 16px",
    "@media(max-width:540px)": {
      textAlign: "center",
    },
  },
  title: {
    fontFamily: "NewSpirit500",
    fontSize: 36,
    lineHeight: "45px",
    color: "#54563D",
    "@media(max-width:1300px)": {
      fontSize: 30,
    },
  },
  para: {
    fontFamily: "Proxima400",
    fontSize: 24,
    padding: "30px 0",
    lineHeight: "30px",
    "& p:nth-child(2)": {
      padding: "30px 0",
    },
    "@media(max-width:1300px)": {
      fontSize: 20,
    },
  },
  btn: {
    padding: "19px 45px",
    color: "#fff",
    background: "#54563D",
    borderRadius: "15px",
    textDecoration: "none",
    fontFamily: "Proxima400",
    // position: "relative",
    // top: 20,
  },
});
const MainCard = ({ imagePath, titleA, titleB, paraA, paraB, btn }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img
        src={require(`../../assets/images/home/main-${imagePath}.png`)}
        alt={titleA}
      />
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <p className={classes.title}>
            <p>{titleA}</p>
            {titleB && <p>{titleB}</p>}
          </p>
          <p className={classes.para}>
            <p>{paraA}</p>
            {paraB && <p>{paraB}</p>}
          </p>
          {btn && (
            <Link to="/products" className={classes.btn}>
              {btn}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
