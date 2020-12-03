import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import VisibilitySensor from "react-visibility-sensor";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import { FaLaptopCode } from "react-icons/fa";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import experience from "../info/experience";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 2rem",
    background: "#242a38",
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
  collapseContent: {
    fontFamily: "Montserrat",
    fontWeight: "300",
    fontSize: ".9rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  expandButton: {
    width: "-webkit-fill-available",
    background: "#f8a736",
    textAlign: "center",
    padding: ".25rem 0",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ExperienceContainer = ({ refProp, setRefInView }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(-1);
  return (
    <VisibilitySensor
      partialVisibility
      // minTopValue={100}
      onChange={(isVisible) => isVisible && setRefInView("experience")}
    >
      {({ isVisible }) => (
        <div
          style={{
            opacity: `${isVisible ? "1" : "0.25"}`,
            transition: "all .4s",
          }}
        >
          <div ref={refProp} className={classes.root}>
            <Typography variant="h4" style={{ fontWeight: "600" }}>
              {"EXPERIENCE"}
            </Typography>
            <div className={classes.experience}>
              <Timeline align="alternate">
                {experience.map((val, idx) => (
                  <TimelineItem key={idx}>
                    <TimelineSeparator>
                      <TimelineDot
                        className={classes.timelineDot}
                        style={{
                          background: `${
                            val.endDate === "Present" ? "#f8a736" : "#bdbdbd"
                          }`,
                        }}
                      >
                        <FaLaptopCode className={classes.icons} />
                      </TimelineDot>
                      {idx + 1 < experience.length && <TimelineConnector />}
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
                            {val.title}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "300" }}
                          >{`${val.startDate} - ${val.endDate}`}</Typography>
                          <Typography variant="subtitle1">
                            {val.company}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "300" }}
                          >
                            {val.location}
                          </Typography>
                          {val.tech.map((o, idx) => (
                            <Chip
                              key={idx}
                              label={o}
                              variant="outlined"
                              style={{ margin: ".2rem" }}
                            />
                          ))}
                          <Collapse
                            in={expanded !== -1 && expanded === idx}
                            timeout="auto"
                            unmountOnExit
                            style={{ marginTop: ".5rem" }}
                          >
                            <Typography
                              variant="body"
                              className={classes.collapseContent}
                            >
                              {val.descriptions.join(" ")}
                            </Typography>
                          </Collapse>
                        </div>
                        <div
                          className={classes.expandButton}
                          onClick={() =>
                            setExpanded((prevState) =>
                              prevState === idx ? -1 : idx
                            )
                          }
                        >
                          <ExpandMoreIcon
                            className={clsx(classes.expand, {
                              [classes.expandOpen]:
                                expanded !== -1 && expanded === idx,
                            })}
                          />
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

export default ExperienceContainer;
