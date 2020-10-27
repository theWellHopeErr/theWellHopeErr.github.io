import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import Typewriter from "typewriter-effect";
import VisibilitySensor from "react-visibility-sensor";
import { FaLinkedin, FaGithub, FaTwitter, FaHackerrank } from "react-icons/fa";
import { SiGmail, SiCodechef } from "react-icons/si";
import { Image } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "fit-content",
    padding: "2em",
    transform: "translate(-50%,-50%)",
    // [theme.breakpoints.up('xs')]: {
    //   transform: 'translate(-50%,-30%)',
    // },
    // [theme.breakpoints.up('sm')]: {
    //   transform: 'translate(-50%,-75%)',
    // },
    // [theme.breakpoints.up('md')]: {
    //   transform: 'translate(-50%,-100%)',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   transform: 'translate(-50%,-125%)',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   transform: 'translate(-50%,-200%)',
    // },
  },
  profileCard: {
    paddingBottom: "1em",
  },
  greetings: {
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
  social: {
    padding: "1.5em",
  },
  icons: {
    border: "1px solid",
    borderRadius: "50%",
    padding: ".5rem",
    minWidth: "50px",
    minHeight: "50px",
    color: "#b0b7bf",
    margin: ".5em",
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
  const social = [
    {
      href: "https://www.linkedin.com/in/theWellHopeErr",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/theWellHopeErr",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/theWellHopeErr",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.codechef.com/users/thewellhopeerr",
      icon: <SiCodechef />,
    },
    {
      href: "https://www.hackerrank.com/Suryarajan_S",
      icon: <FaHackerrank />,
    },
    {
      href: "mailto:ssuryarajan@gmail.com?subject=via%20Portfolio",
      icon: <SiGmail />,
    },
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
          <Typography style={{ paddingRight: ".3rem" }}>{"I am a "}</Typography>
          <b>
            <Typewriter
              options={{
                strings: keyWords,
                autoStart: true,
                loop: true,
              }}
            />
          </b>
        </div>

        <div className={classes.social}>
          {social.map((s) => (
            <a href={s.href} target="_blank" rel="noreferrer">
              <span className={classes.icons}>{s.icon}</span>
            </a>
          ))}
        </div>

        <div onClick={() => scrollTo(refProps.about)}>
          <Image src="assets/img/mouse.gif" className={classes.mouse} />
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default HomeContainer;
