import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { FaLinkedin, FaGithub, FaTwitter, FaHackerrank } from "react-icons/fa";
import { SiGmail, SiCodechef } from "react-icons/si";

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
  },
}));

const SocialLinks = () => {
  const classes = useStyles();

  const social = [
    {
      href: "https://www.linkedin.com/in/theWellHopeErr",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/theWellHopeErr",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/theWellHopeErr",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.codechef.com/users/thewellhopeerr",
      icon: <SiCodechef />,
    },
    {
      href: "https://www.hackerrank.com/Suryarajan_S",
      icon: <FaHackerrank />,
    },
    {
      href: "mailto:ssuryarajan@gmail.com?subject=via%20Portfolio",
      icon: <SiGmail />,
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
