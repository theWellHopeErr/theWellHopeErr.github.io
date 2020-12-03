import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import VisibilitySensor from "react-visibility-sensor";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import projects from "../info/projects";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 2rem",
    background: "#242a38",
  },
  projects: {
    display: "flex",
    padding: "1rem 3rem",
    justifyContent: "center",
    marginBlockStart: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
    },
  },
  card: {
    width: "90%",
    marginBottom: "1rem",
    filter: "grayscale(1)",
    transitionProperty: "filter width",
    transitionDuration: ".3s",
    backfaceVisibility: "hidden",
    "&:hover": {
      boxShadow: "0px 0px 25px 2px #f8a736", // 41ffc9ab
      filter: "grayscale(0)",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    margin: "2rem 0",
  },
  a: {
    textDecoration: "none",
    color: "#f8a736",
  },
  chip: {
    margin: ".2rem",
    color: "#f8a736",
    fontWeight: "600",
  },
  expandButton: {
    background: "#f8a736",
    border: "1px solid #919191",
    margin: ".5rem",
    padding: ".5rem",
    width: "2rem",
    height: "2rem",
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

const ProjectsContainer = ({ refProp, setRefInView }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(-1);
  return (
    <VisibilitySensor
      partialVisibility
      // minTopValue={100}
      onChange={(isVisible) => isVisible && setRefInView("projects")}
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
              {"PROJECTS"}
            </Typography>
            <Grid className={classes.projects} container>
              {projects.map((project, idx) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={3}
                  key={idx}
                  style={{ textAlign: "-webkit-center" }}
                >
                  <Card variant="outlined" raised className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" style={{ fontWeight: "600" }}>
                        {project.title}
                      </Typography>
                      <Typography variant="subtitle1">
                        {project.date}
                      </Typography>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.a}
                      >
                        <CardMedia
                          className={classes.media}
                          image={project.img}
                          title={project.title}
                        />
                      </a>
                      {project.stack.map((o, idx) => (
                        <Chip
                          key={idx}
                          label={o}
                          variant="outlined"
                          className={classes.chip}
                        />
                      ))}
                      <br />
                      <IconButton
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
                      </IconButton>
                    </CardContent>
                    <Collapse
                      in={expanded !== -1 && expanded === idx}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent style={{ paddingTop: "0" }}>
                        <Typography
                          variant="body"
                          style={{ fontWeight: "300" }}
                        >
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Collapse>

                    <CardActions style={{ justifyContent: "center" }}>
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className={classes.a}
                        >
                          <Button style={{ background: "#f8a736" }}>
                            <Typography variant="subtitle1">
                              {"See Code"}
                            </Typography>
                          </Button>
                        </a>
                      )}
                      {project.site && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noreferrer"
                          className={classes.a}
                        >
                          <Button style={{ background: "#f8a736" }}>
                            <Typography variant="subtitle1">
                              {"Live"}
                            </Typography>
                          </Button>
                        </a>
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default ProjectsContainer;
