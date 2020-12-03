import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";
import { SiGmail, SiCodechef } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  social: {
    padding: "1em",
    placeContent: "center",
  },
  icon: {
    color: "#41ffc9ab",
    padding: "6px",
    borderRadius: "30%",
    width: "2rem",
    height: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "1.5rem",
      height: "1.5rem",
    },
    "&:hover": {
      boxShadow: "0px 0px 25px 2px #41ffc9ab", // f8a736
    },
  },
}));

const SocialLinks = () => {
  const classes = useStyles();

  const social = [
    {
      href: "https://github.com/theWellHopeErr",
      icon: <FaGithub className={classes.icon} />,
    },
    {
      href: "https://stackoverflow.com/users/8826642",
      icon: <FaStackOverflow className={classes.icon} />,
    },
    {
      href: "https://www.linkedin.com/in/theWellHopeErr",
      icon: <FaLinkedin className={classes.icon} />,
    },
    {
      href: "https://twitter.com/theWellHopeErr",
      icon: <FaTwitter className={classes.icon} />,
    },
    {
      href: "https://www.codechef.com/users/theWellHopeErr",
      icon: <SiCodechef className={classes.icon} />,
    },
    {
      href: "mailto:ssuryarajan@gmail.com?subject=via%20Portfolio",
      icon: <SiGmail className={classes.icon} />,
    },
  ];
  return (
    <Grid container spacing={3} className={classes.social}>
      {social.map((s, idx) => (
        <Grid item key={idx} xs={4} sm={3} md={2} xl={1}>
          <a href={s.href} target="_blank" rel="noreferrer">
            {/* <span className={classes.icons}> */}
            {s.icon}
            {/* </span> */}
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialLinks;
