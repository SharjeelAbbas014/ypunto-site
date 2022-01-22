import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {},
  title: {
    fontFamily: "NewSpirit500",
    fontSize: 36,
    lineHeight: "45px",
    textAlign: "center",
    color: "#C29B81",
  },
  cards: {
    paddingTop: 60,
    maxWidth: 1050,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "0 auto",
  },
  card: {
    padding: "12px 16px",
    "@media(max-width:425px)": {
      paddingBottom: 16,
    },
  },
  cardTitle: {
    paddingTop: 28,
    textAlign: "center",
    fontFamily: "Proxima600",
    fontSize: 24,
    lineHeight: "29px",
  },
  cardImage: {
    "@media(max-width:400px)": {
      maxWidth: 300,
    },
  },
});
const INFO = [
  {
    id: 1,
    imagePath: "a-pom",
  },
  {
    id: 2,
    imagePath: "b-dis",
  },
  {
    id: 3,
    imagePath: "c-cosco",
  },
  {
    id: 4,
    imagePath: "d-pme",
  },
  {
    id: 5,
    imagePath: "e-van",
  },
  {
    id: 6,
    imagePath: "f-cc",
  },
  {
    id: 7,
    imagePath: "g-gar",
  },
  {
    id: 8,
    imagePath: "i-bam",
  },
  {
    id: 9,
    imagePath: "j-gm",
  },
  {
    id: 10,
    imagePath: "k-cc",
  },
  {
    id: 11,
    imagePath: "l-sem",
  },
  {
    id: 12,
    imagePath: "m-blue",
  },
  {
    id: 13,
    imagePath: "n-ek",
  },
  {
    id: 14,
    imagePath: "o-cast",
  },
  {
    id: 15,
    imagePath: "p-my",
  },
  {
    id: 16,
    imagePath: "q-meter",
  },
  {
    id: 17,
    imagePath: "r-zuss",
  },
  {
    id: 18,
    imagePath: "s-ep",
  },
  {
    id: 19,
    imagePath: "t-mex",
  },
  {
    id: 20,
    imagePath: "u-bie",
  },
  {
    id: 21,
    imagePath: "v-we",
  },
  {
    id: 22,
    imagePath: "w-cat",
  },
  {
    id: 23,
    imagePath: "x-armand",
  },
  {
    id: 24,
    imagePath: "y-seven",
  },
  {
    id: 25,
    imagePath: "z-witty",
  },
  {
    id: 26,
    imagePath: "aa-jana",
  },
  {
    id: 27,
    imagePath: "ab-human",
  },
  {
    id: 28,
    imagePath: "ac-reve",
  },
  {
    id: 29,
    imagePath: "ad-ant",
  },
  {
    id: 30,
    imagePath: "ae-john",
  },
  {
    id: 31,
    imagePath: "af-theme",
  },
];
const Brands = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Our Brands Partners</p>
      <div className={classes.cards}>
        {INFO.map((brand) => (
          <div className={classes.card} key={brand.id}>
            <img
              src={require(`../../assets/images/about/brands/${brand.imagePath}.png`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
