import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  social: {
    padding: "1.5em",
    placeContent: "center",
  },
  icons: {
    border: "1px solid",
    borderRadius: "50%",
    padding: ".5rem",
    minWidth: "50px",
    minHeight: "50px",
    color: "#b0b7bf",
    margin: ".5em",
    //   [theme.breakpoints.up("md")]: {
    //     filter:
    //       "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")",
    //     transition: "all .2s ease",
    //     backfaceVisibility: "hidden",
    //     "&:hover": {
    //       filter: "none",
    //     },
    //   },
  },
}));

const SocialLinks = () => {
  const classes = useStyles();

  const social = [
    {
      href: "https://github.com/theWellHopeErr",
      icon: (
        <img
          src="assets/img/github.svg"
          alt="GitHub"
          style={{ width: "1rem" }}
        />
      ),
    },
    {
      href: "https://stackoverflow.com/users/8826642/thewellhopeerr",
      icon: (
        <img
          src="assets/img/stackoverflow.svg"
          alt="StackOverflow"
          style={{ width: "1rem" }}
        />
      ),
    },
    {
      href: "https://www.linkedin.com/in/theWellHopeErr",
      icon: (
        <img
          src="assets/img/linkedin.svg"
          alt="LinkedIn"
          style={{ width: "1rem" }}
        />
      ),
    },
    {
      href: "https://twitter.com/theWellHopeErr",
      icon: (
        <img
          src="assets/img/twitter.svg"
          alt="Twitter"
          style={{ width: "1rem" }}
        />
      ),
    },
    {
      href: "https://www.codechef.com/users/thewellhopeerr",
      icon: (
        <img
          src="assets/img/codechef.svg"
          alt="CodeChef"
          style={{ width: "1rem" }}
        />
      ),
    },
    {
      href: "mailto:ssuryarajan@gmail.com?subject=via%20Portfolio",
      icon: (
        <img src="assets/img/email.svg" alt="Email" style={{ width: "1rem" }} />
      ),
    },
  ];
  return (
    <Grid container spacing={3} className={classes.social}>
      {social.map((s, idx) => (
        <Grid item key={idx} sm={2}>
          <a href={s.href} target="_blank" rel="noreferrer">
            <span className={classes.icons}>{s.icon}</span>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialLinks;
