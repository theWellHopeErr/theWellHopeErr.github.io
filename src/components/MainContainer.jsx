import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";

import HomeContainer from "./HomeContainer";
import AboutContainer from "./AboutContainer";
import ExperienceContainer from "./ExperienceContainer";
// import EducationContainer from "./EducationContainer";
import ContactContainer from "./ContactContainer";
import ProjectsContainer from "./ProjectsContainer";
import NavBar from "./helperComponents/NavBar";
import Footer from "./helperComponents/Footer";

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
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refProps = {
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const [refInView, setRefInView] = useState(null);

  const scrollTo = (ref) => {
    if (ref) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <ProjectsContainer refProp={projectsRef} setRefInView={setRefInView} />
        {/* <div className={classes.div}>
          <EducationContainer
            refProp={educationRef}
            setRefInView={setRefInView}
          />
        </div> */}
        <ContactContainer refProp={contactRef} setRefInView={setRefInView} />
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
