import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: '0',
    width: '-webkit-fill-available',
    zIndex: '1',
    opacity: '0',
    transition: 'all .3s',
    [theme.breakpoints.down('sm')]: {
      opacity: '-1'
    },
  },
  name: {
    fontSize: '2em',
    fontWeight: '600',
    padding: '0 1em',
  },
  menu: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: '5%',
  },
  a: {
    textDecoration: 'none',
    color: 'currentColor',
  },
  menuItem: {
    padding: '0 .5rem',
    fontSize: '1em'
  }
}))

const NavBar = (props) => {
  const classes = useStyles()
  const [scrollY, setScrollY] = useState(0)
  const navbar = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY))
    return (() =>
      window.removeEventListener('scroll', () => setScrollY(window.scrollY))
    )
  }, [])

  useEffect(() => {
    if (scrollY > 20 && window.matchMedia('(min-width: 600px)'))
      navbar.current.style.opacity = '1'
    else
      navbar.current.style.opacity = '0'
  }, [scrollY])

  return (
    <div className={classes.root} ref={navbar}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.name}>
            {'Suryarajan S'}
          </Typography>
          <div className={classes.menu}>
            <a href="#home" className={classes.a}>
              <Typography className={classes.menuItem}>
                {'Home'}
              </Typography>
            </a>
            <a href="#about" className={classes.a}>
              <Typography className={classes.menuItem}>
                {'About'}
              </Typography>
            </a>
            <a href="#experience" className={classes.a}>
              <Typography className={classes.menuItem}>
                {'Experience'}
              </Typography>
            </a>
            <a href="#education" className={classes.a}>
              <Typography className={classes.menuItem}>
                {'Education'}
              </Typography>
            </a>
            <a href="#contact" className={classes.a}>
              <Typography className={classes.menuItem}>
                {'Contact'}
              </Typography>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;