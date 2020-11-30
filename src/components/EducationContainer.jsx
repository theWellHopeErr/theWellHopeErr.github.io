import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import VisibilitySensor from "react-visibility-sensor";
import { FaUserGraduate } from "react-icons/fa";

import education from "../info/education";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 2rem",
    background: "#2f3950",
  },
  paper: {
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  paperDiv: {
    padding: "16px 20px",
  },
  heading: {
    fontSize: "1rem",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
    },
  },
  content: {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".6rem",
    },
  },
  timelineDot: {
    padding: ".8rem",
  },
  icons: {
    fontSize: "1.4em",
  },
}));

const EducationContainer = ({ refProp, setRefInView }) => {
  const classes = useStyles();
  return (
    <VisibilitySensor
      partialVisibility
      // minTopValue={100}
      onChange={(isVisible) => isVisible && setRefInView("education")}
    >
      {({ isVisible }) => (
        <div
          style={{
            opacity: `${isVisible ? "1" : "0"}`,
            transition: "all .5s",
          }}
        >
          <div ref={refProp} className={classes.root}>
            <div className={classes.education}>
              <h2>{"Education"}</h2>
              <Timeline align="alternate">
                {education.map((val, idx) => (
                  <TimelineItem key={idx}>
                    <TimelineSeparator>
                      <TimelineDot className={classes.timelineDot}>
                        <FaUserGraduate className={classes.icons} />
                      </TimelineDot>
                      {idx + 1 < education.length && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent
                      style={{
                        textAlign: `${idx & 1 ? "right" : "left"}`,
                        direction: `${idx & 1 ? "rtl" : "ltr"}`,
                      }}
                    >
                      <Paper elevation={3} className={classes.paper}>
                        <div className={classes.paperDiv}>
                          <Typography className={classes.heading}>
                            {val.degree}
                          </Typography>
                          <Typography
                            className={classes.content}
                          >{`${val.startDate} - ${val.endDate}`}</Typography>
                          <Typography className={classes.content}>
                            {val.institute}
                          </Typography>
                          {/* <Typography style={{ fontSize: "1rem" }}>{val.score}</Typography> */}
                        </div>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default EducationContainer;
