import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "0",
    width: "-webkit-fill-available",
    zIndex: "1",
    opacity: "0",
    transition: "all .3s",
    [theme.breakpoints.down("sm")]: {
      opacity: "-1",
    },
  },
  name: {
    fontSize: "2em",
    fontWeight: "600",
    padding: "0 1em",
  },
  menu: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "5%",
  },
  menuItemDiv: {
    cursor: "pointer",
  },
  menuItem: {
    padding: "0 .5rem",
    fontSize: "1em",
  },
}));

const NavBar = ({ refProps, refInView, scrollTo }) => {
  const classes = useStyles();
  const [scrollY, setScrollY] = useState(0);
  const navbar = useRef(null);
  const homeTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const experienceTextRef = useRef(null);
  const educationTextRef = useRef(null);
  const contactTextRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  useEffect(() => {
    if (scrollY > 20 && window.matchMedia("(min-width: 600px)"))
      navbar.current.style.opacity = "1";
    else navbar.current.style.opacity = "0";
  }, [scrollY]);

  useEffect(() => {
    const refTextProps = {
      home: homeTextRef,
      about: aboutTextRef,
      experience: experienceTextRef,
      education: educationTextRef,
      contact: contactTextRef,
    };
    setActive(refTextProps[refInView]);
  }, [refInView]);

  const setActive = (ref) => {
    homeTextRef.current.style.borderBottom = "0";
    aboutTextRef.current.style.borderBottom = "0";
    experienceTextRef.current.style.borderBottom = "0";
    educationTextRef.current.style.borderBottom = "0";
    contactTextRef.current.style.borderBottom = "0";
    if (ref) ref.current.style.borderBottom = "2px solid";
  };

  return (
    <div className={classes.root} ref={navbar}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.name}>{"Suryarajan S"}</Typography>
          <div className={classes.menu}>
            <div
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActive(homeTextRef);
              }}
              className={classes.menuItemDiv}
            >
              <Typography className={classes.menuItem} ref={homeTextRef}>
                {"Home"}
              </Typography>
            </div>
            <div
              onClick={() => {
                scrollTo(refProps.about);
                setActive(aboutTextRef);
              }}
              className={classes.menuItemDiv}
            >
              <Typography className={classes.menuItem} ref={aboutTextRef}>
                {"About"}
              </Typography>
            </div>
            <div
              onClick={() => {
                scrollTo(refProps.experience);
                setActive(experienceTextRef);
              }}
              className={classes.menuItemDiv}
            >
              <Typography className={classes.menuItem} ref={experienceTextRef}>
                {"Experience"}
              </Typography>
            </div>
            <div
              onClick={() => {
                scrollTo(refProps.education);
                setActive(educationTextRef);
              }}
              className={classes.menuItemDiv}
            >
              <Typography className={classes.menuItem} ref={educationTextRef}>
                {"Education"}
              </Typography>
            </div>
            <div
              onClick={() => {
                scrollTo(refProps.contact);
                setActive(contactTextRef);
              }}
              className={classes.menuItemDiv}
            >
              <Typography className={classes.menuItem} ref={contactTextRef}>
                {"Contact"}
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
