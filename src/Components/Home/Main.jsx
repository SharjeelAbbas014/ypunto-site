import React from "react";
import { createUseStyles } from "react-jss";
import MainCard from "./MainCard";

const INFO = [
  {
    id: 1,
    imagePath: "a",
    title: { a: "Great knits are TRANSPARENT", b: false },
    para: {
      a: "We stand by our values and promises to our clients. At Y punto, we are transparent in our operations and always clearly communicate what and how we produce. For each of our products, we provide a transparency report of our supply chain.",
      b: "We have worked with our local partners for more than 20 years and cooperate with local factories that are certified to make sure we can trace how our garments were made, starting from the first fiber and ending at your stores.",
    },
    btn: false,
  },
  {
    id: 2,
    imagePath: "b",
    title: { a: "Our Products", b: false },
    para: {
      a: "We create sustainable flat knit garments that can follow your own designs or our team's designs, from clothes to home textiles to accessories.",
      b: false,
    },
    btn: "See our catalog",
  },
  {
    id: 3,
    imagePath: "c",
    title: { a: "Fair Trade:", b: "Be Knit Together" },
    para: {
      a: "We believe that our business should be absolutely oriented towards people's happiness and self-fulfillment. This applies to our customers, suppliers and, of course, our team. 100% of our employees receive a living wage.",
      b: false,
    },
    btn: false,
  },
];
const useStyles = createUseStyles({
  wrapper: {},
  card: {},
});
const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {INFO.map((item) => (
        <MainCard
          key={item.id}
          imagePath={item.imagePath}
          titleA={item.title.a}
          titleB={item.title.b}
          paraA={item.para.a}
          paraB={item.para.b}
          btn={item.btn}
        />
      ))}
    </div>
  );
};

export default Main;
