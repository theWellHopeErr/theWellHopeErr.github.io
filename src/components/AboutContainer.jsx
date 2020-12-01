import React, { Fragment, useState } from "react";
import { Avatar, Button, Chip, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import VisibilitySensor from "react-visibility-sensor";
import { GiWorld } from "react-icons/gi";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

import skills from "../info/skills";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2f3950",
    padding: "1rem 2rem",
  },
  about: {
    padding: "1rem 2rem",
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
  profile: {
    textAlign: "justify",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      paddingBottom: "1rem",
    },
  },
  clickToReveal: {
    border: "1px dashed",
    padding: "5px",
    cursor: "pointer",
  },
  hr1: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  skills: {
    textAlign: "justify",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0 0 0",
    },
  },
  resumeBtn: {
    width: "9rem",
    height: "3rem",
    border: "solid",
    fontWeight: "700",
    fontSize: "1.2rem",
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
          style={{
            opacity: `${isVisible ? "1" : "0.25"}`,
            transition: "all .5s",
          }}
        >
          <div ref={refProp} className={classes.root}>
            <h2>{"About"}</h2>

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
                  variant="h6"
                  style={{ textAlign: "center", fontWeight: "600" }}
                >
                  {"Allow me to introduce myself."}
                </Typography>
                <br />
                <Typography>
                  {
                    "People call me Surya. I am currently pursuing my Bachelors in the stream of Computer Science and Engineering. Since joining the course, I have greatly enhanced my programming skills by solving various problems and competing in competitions."
                  }
                </Typography>
                <Typography>
                  {
                    "I am very excited about the advances of Artificial Intelligence in today's technology and wish to learn a lot about AI and ML."
                  }
                </Typography>
                <br />
                <Typography>
                  {
                    "I started with web development in my first year, and I have improved my skills in application development and problem-solving by working on various projects and internships. In all my interns, I had to learn new libraries and frameworks used in their companies, and I was able to grasp those concepts quickly and work productively. I have ~2 years of experience working in React, Node JS, and other versioning tools like Git, Heroku, and Docker. "
                  }
                </Typography>
                <br />
                <Typography>
                  {"I regularly contribute to "}
                  <a
                    href="https://stackoverflow.com/users/8826642/thewellhopeerr"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.a}
                  >
                    {"StackOverflow"}
                  </a>
                  {
                    " sharing my knowledge with those in need in the tech community. I recently crossed 1000 reputation points and ranked in the top 0.26% for that month."
                  }
                </Typography>

                <br />
                <Typography>
                  {
                    "Oh Yeah, I also give talks. I've conducted several seminars in my college symposiums and several webinars in the COVID-19 lockdown period on various topics like Python Programming, Artificial Intelligence, TensorFlow."
                  }
                </Typography>
              </Grid>
            </Grid>

            <Grid container className={classes.profileBox}>
              <Grid item xs={12} md={6} className={classes.profile}>
                <Typography
                  align="center"
                  style={{ fontSize: "1.4rem", fontWeight: "600" }}
                >
                  {"PROFILE"}
                </Typography>
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

                <Typography>
                  {"Full Name: "}
                  <Typography></Typography>
                  <span className={classes.a} style={{ fontSize: "1.25rem" }}>
                    {"Suryarajan S"}
                  </span>
                </Typography>
                <br />
                <Typography>
                  {"Phone: "}
                  <Typography
                    variant="button"
                    className={classes.clickToReveal}
                    style={revealPhone ? { display: "none" } : {}}
                    onClick={() => setRevealPhone(true)}
                  >
                    {"CLICK-TO-REVEAL"}
                  </Typography>
                  <a
                    className={classes.a}
                    href={"tel:+918122985883"}
                    style={{
                      fontSize: "1.25rem",
                      display: `${revealPhone ? "block" : "none"}`,
                    }}
                  >
                    {"+91 8122985883"}
                  </a>
                </Typography>
                <br />
                <Typography>
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
                    {"ssuryarajan@gmail.com"}
                  </a>
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} className={classes.skills}>
                <Typography
                  align="center"
                  style={{ fontSize: "1.4rem", fontWeight: "600" }}
                >
                  {"SKILLS"}
                </Typography>
                <br />
                {skills.map((skill, idx) => (
                  <Fragment key={idx}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "600" }}
                    >
                      <img
                        src={`assets/img/${skill.icon}.svg`}
                        alt={skill.label}
                        style={{ width: "1rem", filter: "invert(1)" }}
                      />{" "}
                      {skill.label}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ paddingLeft: "1rem" }}
                    >
                      {skill.tech.map((o, idx) => (
                        <Chip
                          key={idx}
                          color="primary"
                          label={o}
                          variant="outlined"
                          style={{ margin: ".2rem" }}
                        />
                      ))}
                    </Typography>
                  </Fragment>
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
        </div>
      )}
    </VisibilitySensor>
  );
};

export default AboutContainer;
