import * as React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menu: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px 80px",
    width: "100%",
  },
  item: {
    alignItems: "center",
    border: "1px solid",
    display: "flex",
    flex: "auto",
    height: "240px",
    justifyContent: "center",
    margin: "0 8px 16px",
    minWidth: "30%",
  },
  content: {
    border: "1px solid",
    padding: "25px",
    textAlign: "center",
  },
  title: {
    color: "#4a4a4a",
    fontSize: "22px",
  },
  subtitle: {
    fontSize: "16px",
  },
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <div className={classes.item}>
        <div className={classes.content}>
          <h2 className={classes.title}>Bonés</h2>
          <span className={classes.subtitle}>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2 className={classes.title}>Jaquetas</h2>
          <span className={classes.subtitle}>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2 className={classes.title}>Tênis</h2>
          <span className={classes.subtitle}>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2 className={classes.title}>Mulheres</h2>
          <span className={classes.subtitle}>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2 className={classes.title}>Homens</h2>
          <span className={classes.subtitle}>Compre agora!</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
