import React from "react";
import { makeStyles } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2f3950",
    padding: "1rem 2rem",
  },
  about: {
    padding: "1rem 2rem",
  },
}));

const AboutContainer = ({ refProp, setRefInView }) => {
  const classes = useStyles();
  return (
    <VisibilitySensor
      partialVisibility
      // minTopValue={100}
      onChange={(isVisible) => isVisible && setRefInView("about")}
    >
      <div ref={refProp} className={classes.root}>
        <h2>{"About"}</h2>
        <div className={classes.about}></div>
      </div>
    </VisibilitySensor>
  );
};

export default AboutContainer;
