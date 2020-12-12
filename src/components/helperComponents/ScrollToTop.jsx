import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleUp as ArrowUp } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  scrollDiv: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: "2",
    background: "#242a38",
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "0px 0px 10px 2px #41ffc9ab", // f8a736
    },
  },
  scrollIcon: {
    width: "2.5rem",
    height: "2.5rem",
    color: "#ccece6",
  },
}));

const Scroll = () => {
  const classes = useStyles();
  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  useEffect(() => {
    if (scrollY > 20 && window.matchMedia("(min-width: 600px)"))
      scrollRef.current.style.opacity = "1";
    else scrollRef.current.style.opacity = "0";
  }, [scrollY]);

  return (
    <div
      className={classes.scrollDiv}
      ref={scrollRef}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className={classes.scrollIcon} />
    </div>
  );
};

export default Scroll;
