import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";

import NavBar from "./NavBar";
import HomeContainer from "./HomeContainer";
import AboutContainer from "./AboutContainer";
import ExperienceContainer from "./ExperienceContainer";
import EducationContainer from "./EducationContainer";
import ContactContainer from "./ContactContainer";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  rest: {
    position: "absolute",
    top: "101vh",
    width: "100vw",
  },
}));

const MainContainer = () => {
  const classes = useStyles();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const refProps = {
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    contact: contactRef,
  };

  const [refInView, setRefInView] = useState(null);

  const scrollTo = (ref) => {
    if (ref) ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className={classes.root}>
      <NavBar refProps={refProps} scrollTo={scrollTo} refInView={refInView} />
      <HomeContainer
        refProp={homeRef}
        refProps={refProps}
        scrollTo={scrollTo}
        setRefInView={setRefInView}
      />
      <div className={classes.rest}>
        <AboutContainer refProp={aboutRef} setRefInView={setRefInView} />
        <ExperienceContainer
          refProp={experienceRef}
          setRefInView={setRefInView}
        />
        <EducationContainer
          refProp={educationRef}
          setRefInView={setRefInView}
        />
        <ContactContainer refProp={contactRef} setRefInView={setRefInView} />
        {/* <footer className={classes.footer}>
          <Typography className={classes.name}>{"Suryarajan S"}</Typography>
          <CopyrightIcon className={classes.icon} />
          <Typography className={classes.year}>
            {new Date().getFullYear()}
          </Typography>
        </footer> */}
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
