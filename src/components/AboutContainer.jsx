import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import VisibilitySensor from "react-visibility-sensor";

import { GiWorld } from "react-icons/gi";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

import skills from "../info/skills";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2f3950",
    padding: "3rem 2rem",
    transition: "all .3s smooth",
  },
  about: {
    "&::before": {
      content: '"ABOUT ME"',
    },
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "600",
    marginBottom: "1rem",
    "&::before": {
      content: '"Who Am I?"',
    },
  },
  bio101: {
    fontFamily: "Montserrat",
    "&::before": {
      content: `"People call me "`,
    },
  },
  surya: {
    fontWeight: "600",
    fontFamily: "Josefin Sans",
    fontSize: "1.2rem",
    "&::before": {
      content: '"Surya"',
    },
  },
  bio102: {
    fontFamily: "Montserrat",
    "&::before": {
      content: `". I am a Computer Science Engineer. Since joining my bachelor's course, I have greatly enhanced my programming skills by solving various problems and competing in competitions."`,
    },
  },
  bio2: {
    fontFamily: "Montserrat",
    
    marginBottom: "1rem",
    "&::before": {
      content: `"I am very excited about the advances of Artificial Intelligence in today's technology and wish to learn a lot about AI and ML."`,
    },
  },
  bio301: {
    marginBottom: "1rem",
    fontFamily: "Montserrat",
    "&::before": {
      content: `"I started with web development in my first year, and I have improved my skills in application development and problem-solving by working on various projects and internships. In all my interns, I had to learn new libraries and frameworks used in their companies, and I was able to grasp those concepts quickly and work productively. "`,
    },
  },
  bio302: {
    marginBottom: "1rem",
    fontFamily: "Montserrat",
    [theme.breakpoints.up("sm")]: {
      "&::before": {
        content: `"I have ~2 years of experience working in React, Node JS, and other versioning tools like Git, Heroku, and Docker. "`,
      },
    },
  },
  bio401: {
    fontFamily: "Montserrat",
    "&::before": {
      content: `"I regularly contribute to "`,
    },
  },
  bio402: {
    fontFamily: "Montserrat",
    marginBottom: "1rem",
    "&::before": {
      content: `" sharing my knowledge with those in need in the tech community. I recently crossed 1000 reputation points and ranked in the top 0.26% for that month."`,
    },
  },
  bio5: {
    fontFamily: "Montserrat",
    [theme.breakpoints.up("sm")]: {
      "&::before": {
        content: `"Oh Yeah, I also give talks. I've conducted several seminars in my college symposiums and several webinars in the COVID-19 lockdown period on various topics like Python Programming, Artificial Intelligence, TensorFlow."`,
      },
    },
  },
  bioContainer: {
    display: "flex",
    padding: "0 7rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1%",
    },
  },
  bioPic: {
    width: "25%",
    padding: "2rem 0 2rem 0",
    textAlign: "-webkit-center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img: {
    width: "200px",
    height: "200px",
    top: "50%",
    position: "sticky",
  },
  bio: {
    width: "75%",
    padding: "2rem 0",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  stackoverflow: {
    textDecoration: "none",
    color: "#f8a736",
    "&::before": {
      content: `"StackOverflow"`,
    },
  },
  a: {
    textDecoration: "none",
    color: "#f8a736",
  },
  profileBox: {
    display: "flex",
    padding: "0 10rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1%",
    },
  },
  profileText: {
    fontWeight: "600",
    "&::before": {
      content: `"PROFILE"`,
    },
  },
  profile: {
    textAlign: "justify",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      padding: "0",
      paddingBottom: "1rem",
    },
  },
  clickToReveal: {
    border: "1px dashed",
    padding: "5px",
    cursor: "pointer",
  },
  skillsText: {
    fontWeight: "600",
    "&::before": {
      content: `"SKILLS"`,
    },
  },
  chips: {
    paddingLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
    },
  },
  chipsDiv: {
    marginBottom: ".5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: ".2rem",
    },
  },
  chip: {
    margin: "0 .5rem",
    "&:hover": {
      background: "#ccece6",
      color: "#242a38",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 .2rem .2rem 0",
    },
  },
  hr1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  skills: {
    textAlign: "justify",
    padding: "1rem 0 1rem 3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0 0 0",
    },
  },
  resumeDiv: {
    margin: "1rem",
  },
  resumeBtn: {
    width: "9rem",
    height: "3rem",
    border: "solid",
    fontWeight: "700",
    fontSize: "1.2rem",
    "&:hover": {
      boxShadow: "0px 0px 10px 2px #41ffc9ab", // f8a736
    },
  },
}));

const AboutContainer = ({ refProp, setRefInView }) => {
  const classes = useStyles();
  const [revealPhone, setRevealPhone] = useState(false);
  const [revealEmail, setRevealEmail] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility
      // minTopValue={100}
      onChange={(isVisible) => isVisible && setRefInView("about")}
    >
      {({ isVisible }) => (
        <div
          ref={refProp}
          className={classes.root}
          style={{
            opacity: `${isVisible ? "1" : "0.25"}`,
          }}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: "600" }}
            className={classes.about}
          ></Typography>

          <Grid container className={classes.bioContainer}>
            <Grid item xs={12} md={4} className={classes.bioPic}>
              <Avatar
                alt="Suryarajan S"
                src="assets/img/profile.jpg"
                className={classes.img}
              />
            </Grid>
            <Grid item xs={12} md={8} className={classes.bio}>
              <Typography
                variant="h5"
                className={classes.subtitle}
              ></Typography>
              <Typography>
                <span className={classes.bio101}></span>
                <span className={classes.surya}></span>
                <span className={classes.bio102}></span>
              </Typography>
              <Typography className={classes.bio2}></Typography>
              <Typography>
                <span className={classes.bio301}></span>
                <span className={classes.bio302}></span>
              </Typography>

              <Typography>
                <span className={classes.bio401}></span>
                <a
                  href="https://stackoverflow.com/users/8826642/thewellhopeerr"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.stackoverflow}
                >
                  {}
                </a>
                <span className={classes.bio402}></span>
              </Typography>
              <Typography className={classes.bio5}></Typography>
            </Grid>
          </Grid>

          <Grid container className={classes.profileBox}>
            <Grid item xs={12} md={4} className={classes.profile}>
              <Typography
                align="center"
                variant="h5"
                className={classes.profileText}
                style={{ fontWeight: "600" }}
              ></Typography>
              <br />
              <Typography variant="subtitle1">
                <span style={{ marginRight: "2%", color: "#00f2ff" }}>
                  <GiWorld />
                </span>
                {
                  "Full Stack Developer, Web Developer, and Computer Science Engineer."
                }
              </Typography>
              <br />
              <Typography variant="subtitle1">
                <span style={{ marginRight: "2%", color: "#51bf53" }}>
                  <FaGraduationCap />
                </span>
                {
                  "Bachelors in Computer Science and Engineering, Tamil Nadu, India."
                }
              </Typography>
              <br />
              <Typography variant="subtitle1">
                <span style={{ marginRight: "2%", color: "#ef3b36" }}>
                  <FaLaptopCode />
                </span>
                {"1+ years Industrial Experience"}
              </Typography>

              <br />
              <hr className={classes.hr1} />
              <br />

              <Typography variant="subtitle1">{"Full Name: "}</Typography>
              <Typography variant="h5" className={classes.a}>
                {"Suryarajan S"}
              </Typography>
              <br />
              <Typography variant="subtitle1">
                {"Email: "}
                <Typography
                  variant="button"
                  className={classes.clickToReveal}
                  style={revealEmail ? { display: "none" } : {}}
                  onClick={() => setRevealEmail(true)}
                >
                  {"CLICK-TO-REVEAL"}
                </Typography>
                <a
                  className={classes.a}
                  href="mailto:ssuryarajan@gmail.com?subject=via%20Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "1.25rem",
                    display: `${revealEmail ? "block" : "none"}`,
                  }}
                >
                  <Typography variant="h5">
                    {"ssuryarajan@gmail.com"}
                  </Typography>
                </a>
              </Typography>
            </Grid>

            <Grid item xs={12} md={8} className={classes.skills}>
              <Typography
                align="center"
                variant="h5"
                className={classes.skillsText}
              ></Typography>
              <br />
              {skills.map((skill, idx) => (
                <div key={idx} className={classes.chipsDiv}>
                  <Typography variant="h6" style={{ fontWeight: "600" }}>
                    <img
                      src={`assets/img/${skill.icon}.svg`}
                      alt={skill.label}
                      style={{
                        width: "1rem",
                        marginRight: "1rem",
                        filter: "invert(1)",
                      }}
                    />
                    {skill.label}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.chips}>
                    {skill.tech.map((o, idx) => (
                      <Chip
                        key={idx}
                        color="primary"
                        label={o}
                        variant="outlined"
                        className={classes.chip}
                      />
                    ))}
                  </Typography>
                </div>
              ))}
              <br />
            </Grid>
          </Grid>

          <div className={classes.resumeDiv}>
            <a
              href="assets/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={classes.a}
            >
              <Button
                color="primary"
                variant="outlined"
                className={classes.resumeBtn}
              >
                {"Resume"}
              </Button>
            </a>
          </div>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default AboutContainer;
