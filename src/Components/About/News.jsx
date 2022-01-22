import { findByPlaceholderText } from "@testing-library/react";
import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import newsImage from "../../assets/images/about/news-insights.png";
const useStyles = createUseStyles({
  wrapper: {
    paddingTop: 79,
    paddingBottom: 45,
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontFamily: "NewSpirit500",
    fontSize: 36,
    lineHeight: "45px",
    color: "#C29B81",
  },
  newsImage: {
    marginTop: 53,
    marginBottom: 46,
  },
  tagline: {
    fontFamily: "Proxima400",
    fontSize: 24,
    lineHeight: "30px",
    color: "#000",
    paddingBottom: 46,
    "@media(max-width:400px)": {
      fontSize: 18,
    },
  },
  btn: {
    padding: "19px 82px",
    border: "none",
    background: "#54563D",
    color: "#fff",
    borderRadius: 15,
    textDecoration: "none",
  },
  newsImage: {
    maxWidth: "100%",
    padding: "46px 0",
  },
});

const News = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>News and Insights</p>
      <img
        src={newsImage}
        alt="News and Insights"
        className={classes.newsImage}
      />
      <p className={classes.tagline}>
        Stories and great things happening in the industry
      </p>
      <Link className={classes.btn} to="/">
        Read
      </Link>
    </div>
  );
};

export default News;
