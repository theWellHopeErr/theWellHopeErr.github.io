import React from "react";
import { makeStyles } from "@material-ui/core";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import NavBar from "./NavBar";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    // position: 'absolute',
  },
  rest: {
    position: "absolute",
    top: '101vh',
  }
}))

const MainContainer = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NavBar />
      <HomeComponent />
      <div className={classes.rest}>
        <AboutComponent />
      </div>
    </div >
  );
};

export default MainContainer;
