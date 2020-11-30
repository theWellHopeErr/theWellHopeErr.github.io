import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import VisibilitySensor from "react-visibility-sensor";

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
    padding: "0 15rem",
  },
  bioPic: {
    width: "25%",
    padding: "2rem 5rem 0 0",
  },
  img: {
    width: "200px",
    height: "200px",
    margin: "50% 0 0 0;",
  },
  bio: {
    width: "75%",
    padding: "2rem 0",
    textAlign: "justify",
  },
  a: {
    textDecoration: "none",
    color: "#b6a386",
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
      {({ isVisible }) => (
        <div
          style={{
            opacity: `${isVisible ? "1" : "0"}`,
            transition: "all .5s",
          }}
        >
          <div ref={refProp} className={classes.root}>
            <h2>{"About"}</h2>
            <Typography style={{ fontSize: "1.3rem" }}>
              {"Allow me to introduce myself."}
            </Typography>
            <div className={classes.bioContainer}>
              <div className={classes.bioPic}>
                <Avatar
                  alt="Suryarajan S"
                  src="assets/img/profile.jpg"
                  className={classes.img}
                />
              </div>
              <div className={classes.bio}>
                <Typography>
                  {
                    "People call me Surya. I am currently pursuing my Bachelors in the stream of Computer Science and Engineering. Since joining the course, I have greatly enhanced my programming skills by solving various problems and competing in competitions."
                  }
                </Typography>
                <br />
                <Typography>
                  {
                    "I started with web development in my first year, and I have improved my skills in application development and problem-solving by working on various projects and internships. In all my interns, I had to learn new libraries and frameworks used in their companies, and I was able to grasp those concepts quickly and work productively. I have ~2 years of experience working in React, Node JS, and other versioning tools like Git, Heroku, and Docker. "
                  }
                </Typography>
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
                    " so I can share my knowledge with those in need in the tech community."
                  }
                </Typography>
                <Typography>
                  {
                    "I am very excited about the advances of Artificial Intelligence in today's technology and the rate of its growth. I wish to learn a lot about AI and ML."
                  }
                </Typography>
                <br />
                <Typography>
                  {
                    "Oh Yeah, I also give talks. I've conducted several seminars in my college symposiums and several webinars in the COVID-19 lockdown period on various topics like Python Programming, Artificial Intelligence, TensorFlow."
                  }
                </Typography>
              </div>
            </div>
            <div className={classes.about}></div>
          </div>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default AboutContainer;
