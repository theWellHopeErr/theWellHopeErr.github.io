import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    "&:hover": {
      boxShadow: "0px 0px 25px 2px #f8a736", // 41ffc9ab
    },
  },
  paperDiv: {
    padding: "16px 20px",
  },
  timelineDot: {
    padding: ".8rem",
  },
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
  icons: {
    fontSize: "1.4em",
  },
}));

const EducationContainer = ({ refProp, setRefInView }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
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
              <Timeline
                align={`${isSmallDevice ? "left" : "alternate"}`}
                style={{ padding: "6px 1px" }}
              >
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
                        textAlign: `${
                          !isSmallDevice & (idx & 1) ? "right" : "left"
                        }`,
                        direction: `${
                          !isSmallDevice & (idx & 1) ? "rtl" : "ltr"
                        }`,
                      }}
                    >
                      <Paper elevation={3} className={classes.paper}>
                        <div className={classes.paperDiv}>
                          <Typography
                            variant="h6"
                            style={{
                              fontWeight: "600",
                              fontSize: `${isSmallDevice ? "1rem" : "1.25rem"}`,
                            }}
                          >
                            {isSmallDevice ? val.s_degree : val.degree}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{
                              fontWeight: "300",
                              fontSize: `${
                                isSmallDevice ? ".8rem" : "0.875rem"
                              }`,
                            }}
                          >{`${
                            val.startDate
                              ? `${val.startDate} - ${val.endDate}`
                              : val.endDate
                          }`}</Typography>
                          <Typography
                            variant="subtitle1"
                            style={{
                              fontSize: `${
                                isSmallDevice ? ".8rem" : "0.875rem"
                              }`,
                            }}
                          >
                            {isSmallDevice ? val.s_institute : val.institute}
                          </Typography>
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
