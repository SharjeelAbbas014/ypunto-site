import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    paddingTop: 79,
    paddingBottom: 45,
  },
  title: {
    fontFamily: "NewSpirit500",
    fontSize: 36,
    lineHeight: "45px",
    textAlign: "center",
    color: "#C29B81",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  card: {
    padding: "45px 16px",
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
    "@media(max-width:400px)": {
      fontSize: 20,
    },
  },
  cardImage: {
    "@media(max-width:400px)": {
      maxWidth: 280,
    },
  },
});

const INFo = [
  {
    id: 1,
    imgTitle: "Students visit a Y Punto factory",
    imagePath: "a",
  },
  {
    id: 2,
    imgTitle: "Team Training",
    imagePath: "b",
  },
  {
    id: 3,
    imgTitle: "Sustainability Workshop",
    imagePath: "c",
  },
];

const Team = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>We are a team in love with knits!</p>
      <div className={classes.cards}>
        {INFo.map((team) => (
          <div key={team.id} className={classes.card}>
            <img
              className={classes.cardImage}
              src={require(`../../assets/images/about/team/${team.imagePath}.png`)}
              alt={team.imgTitle}
            />
            <p className={classes.cardTitle}>{team.imgTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
