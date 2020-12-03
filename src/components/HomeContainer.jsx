import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import Typewriter from "typewriter-effect";
import VisibilitySensor from "react-visibility-sensor";
import Image from "react-bootstrap/Image";
import SocialLinks from "./SocialLinks";

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
  },
  name: {
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    fontWeight: "600",
  },
  img: {
    width: "200px",
    height: "200px",
    margin: "auto",
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
    paddingTop: "2rem",
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
          <Typography className={classes.greetings}>
            {`Hello there👋, I am`}
          </Typography>
          <Typography className={classes.name}>{`Suryarajan S`}</Typography>
        </div>

        <Avatar
          alt="Suryarajan S"
          src="assets/img/profile.jpg"
          className={classes.img}
        />

        <div className={classes.typewriter}>
          <Typography style={{ fontWeight: "300", paddingRight: ".3rem" }}>
            {"I am a"}
          </Typography>
          <Typography style={{ fontWeight: "500" }}>
            <Typewriter
              options={{
                strings: keyWords,
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </div>

        <SocialLinks />

        <div onClick={() => scrollTo(refProps.about)}>
          <Image src="assets/img/mouse.gif" className={classes.mouse} />
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default HomeContainer;
