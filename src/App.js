import React from "react";
import "./App.css";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import MainContainer from "./components/MainContainer";
import Scroll from "./components/ScrollToTop";

// import particles from './particles.json';
// import Particles from 'react-particles-js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ccece6",
      dark: "#005bc9",
      light: "#90b6ff",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Josefin Sans",
  },
});

const styles = (theme) => ({
  app: {
    textAlign: "center",
    fontFamily: "Josefin Sans",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: "#ccece6",
    textAlign: "center",
    fontFamily: "Josefin Sans",
  },
}));

const App = () => {
  const classes = useStyles();
  // <Particles params={particles} />
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <MainContainer />
      </div>
      {/* <Footer /> */}
      <Scroll />
    </MuiThemeProvider>
  );
};

export default withStyles(styles, { withTheme: true })(App);
