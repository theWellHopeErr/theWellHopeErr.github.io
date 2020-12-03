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
            opacity: `${isVisible ? "1" : "0.25"}`,
            transition: "all .4s",
          }}
        >
          <div ref={refProp} className={classes.root}>
            <div className={classes.education}>
              <Typography variant="h4" style={{ fontWeight: "600" }}>
                {"EDUCATION"}
              </Typography>
              <Timeline align="alternate">
                {education.map((val, idx) => (
                  <TimelineItem key={idx}>
                    <TimelineSeparator>
                      <TimelineDot
                        className={classes.timelineDot}
                        style={{
                          background: `${
                            new Date().getFullYear() <= val.endDate
                              ? "#f8a736"
                              : "#bdbdbd"
                          }`,
                        }}
                      >
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
                          <Typography
                            variant="h6"
                            style={{ fontWeight: "600" }}
                          >
                            {val.degree}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "300" }}
                          >{`${
                            val.startDate
                              ? `${val.startDate} - ${val.endDate}`
                              : val.endDate
                          }`}</Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "400" }}
                          >
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
