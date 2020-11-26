import * as React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menu: {},
  item: {},
  content: {},
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <div className={classes.item}>
        <div className={classes.content}>
          <h2>Bonés</h2>
          <span>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2>Jaquetas</h2>
          <span>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2>Tênis</h2>
          <span>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2>Mulheres</h2>
          <span>Compre agora!</span>
        </div>
      </div>

      <div className={classes.item}>
        <div className={classes.content}>
          <h2>Homens</h2>
          <span>Compre agora!</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
