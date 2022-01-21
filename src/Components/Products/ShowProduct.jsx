import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    fontFamily: "Proxima400",
    fontSize: 24,
    lineHeight: "29px",
    width: 320,
    "& > img": {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 70,
  },
  content: {
    paddingTop: 7,
  },
  logos: {
    paddingTop: 18,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& img": {
      paddingRight: 16,
    },
  },
});

const ShowProduct = ({ info, folder }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img
        src={require(`../../assets/images/products/${folder}/${info.imagePath}.png`)}
        alt={info.line.a}
      />
      <div className={classes.content}>
        <p>{info.line.a}</p>
        {info.line.a && <p>{info.line.b}</p>}
        {info.line.b && <p>{info.line.c}</p>}
        <div className={classes.logos}>
          <img
            src={require(`../../assets/images/products/logos/${info.logo.a}.png`)}
          />
          {info.logo.b && (
            <img
              src={require(`../../assets/images/products/logos/${info.logo.b}.png`)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
