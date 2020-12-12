import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import Typewriter from "typewriter-effect";
import VisibilitySensor from "react-visibility-sensor";

import SocialLinks from "./helperComponents/SocialLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "fit-content",
    padding: "2em",
    transform: "translate(-50%,-50%)",
  },
  profileCard: {
    paddingBottom: "1em",
  },
  greetings: {
    fontWeight: "300",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    "&::before": {
      content: '"Hello there👋, I am"',
    },
  },
  name: {
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    fontWeight: "600",
    "&::before": {
      content: '"Suryarajan S"',
    },
  },
  img: {
    width: "200px",
    height: "200px",
    margin: "auto",
    "&:hover": {
      boxShadow: "0px 0px 25px 2px #41ffc9ab", // f8a736
    },
  },
  typewriter: {
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1rem",
  },
  mouse: {
    width: "3rem",
    animationDuration: "1s",
    animationDelay: "1s",
    animationName: "bounceInUp",
  },
}));

const HomeContainer = ({ refProp, scrollTo, refProps, setRefInView }) => {
  const classes = useStyles();
  const keyWords = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Mentor",
    "Learner",
    "Contributor",
  ];

  return (
    <VisibilitySensor
      partialVisibility
      // minTopValue={100}
      onChange={(isVisible) => isVisible && setRefInView("home")}
    >
      <div className={classes.root} ref={refProp}>
        <div className={classes.profileCard}>
          <Typography className={classes.greetings}></Typography>
          <Typography className={classes.name}></Typography>
        </div>

        <Avatar
          alt="Suryarajan S"
          src="assets/img/profile.jpg"
          component="div"
          className={classes.img}
        />

        <div className={classes.typewriter}>
          <Typography
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              paddingRight: ".3rem",
            }}
          >
            {"I am a"}
          </Typography>
          <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
            <Typewriter
              options={{
                strings: keyWords,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <SocialLinks />
      </div>
    </VisibilitySensor>
  );
};

export default HomeContainer;
