import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Image } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'fit-content',
    padding: '2em',
    transform: 'translate(-50%,-50%)',
    // [theme.breakpoints.up('xs')]: {
    //   transform: 'translate(-50%,-30%)',
    // },
    // [theme.breakpoints.up('sm')]: {
    //   transform: 'translate(-50%,-75%)',
    // },
    // [theme.breakpoints.up('md')]: {
    //   transform: 'translate(-50%,-100%)',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   transform: 'translate(-50%,-125%)',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   transform: 'translate(-50%,-200%)',
    // },
  },
  profileCard: {
    paddingBottom: '1em',
  },
  greetings: {
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  name: {
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
    fontWeight: '600',
  },
  img: {
    width: '200px',
    height: '200px',
    margin: 'auto'
  },
  typewriter: {
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1rem'
  },
  social: {
    padding: '1.5em',
  },
  icons: {
    border: '1px solid',
    borderRadius: '50%',
    padding: '.5rem',
    minWidth: '50px',
    minHeight: '50px',
    color: '#b0b7bf',
    margin: '.5em',
  },
  mouse: {
    width: '3rem',
    paddingTop: '2rem',
    animationDuration: '1s',
    animationDelay: '1s',
    animationName: 'bounceInUp',
  }
}))

const HomeComponent = (props) => {
  const classes = useStyles()
  const keyWords = [
    'Full Stack Developer',
    'Tech Enthusiast',
    'Mentor',
    'Learner',
    'Contributor',
  ]
  return (
    <div className={classes.root}>
      <div className={classes.profileCard}>
        <Typography className={classes.greetings}>
          {`Hello there👋, I am`}
        </Typography>
        <Typography className={classes.name}>
          {`Suryarajan S`}
        </Typography>
      </div>

      <Avatar
        alt="Suryarajan S"
        src='assets/img/profile.jpg'
        className={classes.img}
      />

      <div className={classes.typewriter}>
        <Typography style={{ paddingRight: '.3rem' }}>{'I am a '}</Typography>
        <b>
          <Typewriter
            options={{
              strings: keyWords,
              autoStart: true,
              loop: true,
            }}
          />
        </b>
      </div>

      <div className={classes.social}>
        <a href={'https://www.linkedin.com/in/theWellHopeErr'} target="_blank" rel="noreferrer"><span className={classes.icons}><FaLinkedin /></span></a>
        <a href={'https://github.com/theWellHopeErr'} target="_blank" rel="noreferrer"><span className={classes.icons}><FaGithub /></span></a>
        <a href={'https://twitter.com/theWellHopeErr'} target="_blank" rel="noreferrer"><span className={classes.icons}><FaTwitter /></span></a>
        <a href={'mailto:ssuryarajan@gmail.com?subject=via%20Portfolio'} target="_blank" rel="noreferrer"><span className={classes.icons}><SiGmail /></span></a>
      </div>

      <a href="#about">
        <Image src="assets/img/mouse.gif" className={classes.mouse} />
      </a>

    </div>
  );
}

export default HomeComponent;