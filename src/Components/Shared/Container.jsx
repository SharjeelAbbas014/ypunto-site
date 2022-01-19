import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "1440px",
    margin: "auto",
    // backgroundColor: "#eee",
  },
});

const Container = (props) => {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
