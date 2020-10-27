import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#fff',
    display: 'flex',
    padding: '10px 0',
    background: '#32383e',
    justifyContent: 'center',
    marginTop: '100%',
  },
  name: {
    color: '#a1aab4',
    fontSize: '.8rem',
  },
  year: {
    fontSize: '.8rem',
  },
  icon: {
    color: '#a1aab4',
    fontSize: '1.1rem',
    padding: '0 .3rem',
  },
}))

const Footer = (props) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Typography className={classes.name}>{'Suryarajan S'}</Typography>
      <CopyrightIcon className={classes.icon} />
      <Typography className={classes.year}>{new Date().getFullYear()}</Typography>
    </footer>
  );
}

export default Footer;