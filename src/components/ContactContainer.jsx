import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { AiFillWechat } from "react-icons/ai";
import emailjs from "emailjs-com";

const ipapi = require("ipapi.co");

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem 2rem",
    transition: "all .3s smooth",
    background: "#242a38",
  },
  contactText: {
    fontWeight: "600",
    "&::before": {
      content: `"KEEP IN TOUCH"`,
    },
  },
  subtitleText: {
    fontWeight: "600",
    [theme.breakpoints.up("sm")]: {
      "&::before": {
        content: `"Got a question?"`,
      },
    },
  },
  sideText: {
    fontWeight: "500",
    "&::before": {
      content: `"Got a question on the services that I provide? I am just a click away."`,
    },
  },
  contactMsg: {
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      padding: "5.2rem !important",
    },
  },
  formDiv: {
    flex: 1,
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    borderRadius: "5px",
  },
  nameEmailDiv: {
    paddingTop: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  nameInput: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexGrow: ".5",
    },
  },
  emailInput: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexGrow: ".5",
    },
  },
  cssOutlinedInput: {
    color: "#ccece6",
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#ccece6 !important",
  },
  submitBtn: {
    width: "fit-content",
    padding: "1rem",
    cursor: "pointer",
    border: "1px solid",
    borderRadius: "5px",
    margin: "1rem auto",
    background: "#ccece6",
    color: "#242a38",
    fontWeight: "800",
    fontSize: "1.1rem",
    transition: "all .3s ease",
    "&:hover": {
      color: "#ccece6",
      background: "#242a38",
      boxShadow: "0px 0px 10px 2px #41ffc9ab", // f8a736
    },
  },
  error: {
    color: "#ff0800",
  },
}));

const initialMailStatus = {
  color: "#242a38",
  message: "Submit",
};

const ContactContainer = ({ refProp, setRefInView }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [location, setLocation] = useState({});
  const [mailLimit, setMailLimit] = useState(4);
  const [mailStatus, setMailStatus] = useState(initialMailStatus);

  const timeoutRef = useRef(null);

  useEffect(() => {
    ipapi.location((loc) => setLocation(loc));
  }, []);

  useEffect(() => {
    if (mailLimit < 0) {
      setMailStatus({
        color: "#ff0800",
        message: "Your mailing queue is full.",
      });
      setIsSubmitButtonDisabled(true);
    }
  }, [mailLimit]);

  const handleSubmit = () => {
    if (!name) setNameError("Name is Required");
    if (!email) setEmailError("Email is Required");
    if (!subject) setSubjectError("Subject is Required");
    if (!message) setMessageError("Message is Required");

    if (
      name &&
      email &&
      subject &&
      message &&
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,}$/.test(email)
    ) {
      setIsSubmitButtonDisabled(true);
      setMailStatus({
        color: "#55ff00",
        message: "Sending...",
      });
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            name,
            email,
            subject,
            message,
            location: JSON.stringify(location, null, 2),
          },
          process.env.REACT_APP_USER_ID
        )
        .then(
          () => {
            setMailStatus({
              color: "#55ff00",
              message: "Message Sent!",
            });
            setMailLimit((prev) => prev - 1);

            if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
              timeoutRef.current = null;
              if (mailLimit > 0) {
                setMailStatus(initialMailStatus);
                setIsSubmitButtonDisabled(false);
              }
            }, 5000);

            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setNameError("");
            setEmailError("");
            setSubjectError("");
            setMessageError("");
          },
          (err) => {
            // console.log(err);
            setMailStatus(() => {
              return {
                color: "#ff0800",
                message: "Message Sent!",
              };
            });
            if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
              timeoutRef.current = null;
              setMailStatus(initialMailStatus);
              setIsSubmitButtonDisabled(false);
            }, 2000);
          }
        );
    }
  };

  return (
    <VisibilitySensor
      partialVisibility
      // minTopValue={100}
      onChange={(isVisible) => isVisible && setRefInView("contact")}
    >
      {({ isVisible }) => (
        <div
          style={{
            opacity: `${isVisible ? "1" : "0.25"}`,
          }}
          ref={refProp}
          className={classes.root}
        >
          <Typography variant="h4" className={classes.contactText}></Typography>
          <div className={classes.contact}>
            <Grid container spacing={3}>
              <Grid item className={classes.contactMsg}>
                <AiFillWechat style={{ fontSize: "7rem" }} />
                <Typography
                  variant="h6"
                  className={classes.sideText}
                ></Typography>
              </Grid>
              <Grid item className={classes.formDiv}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subtitleText}
                ></Typography>
                <form onSubmit={() => console.log("123")}>
                  <div className={classes.nameEmailDiv}>
                    <div className={classes.nameInput}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        color="primary"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (name) setNameError("");
                        }}
                        InputLabelProps={{
                          style: {
                            color: "#ccece6",
                          },
                        }}
                        InputProps={{
                          classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                      />
                      {nameError && (
                        <label className={classes.error}>{nameError}</label>
                      )}
                    </div>
                    <div style={{ padding: "1rem" }} />
                    <div className={classes.emailInput}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        color="primary"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,}$/.test(email))
                            setEmailError("");
                          else
                            setEmailError("This does not look like an email");
                        }}
                        required
                        InputLabelProps={{
                          style: {
                            color: "#ccece6",
                          },
                        }}
                        InputProps={{
                          classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                          },
                        }}
                      />
                      {emailError && (
                        <label className={classes.error}>{emailError}</label>
                      )}
                    </div>
                  </div>
                  <div style={{ padding: "1rem" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <TextField
                      label="Subject"
                      variant="outlined"
                      color="primary"
                      required
                      fullWidth
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (subject) setSubjectError("");
                      }}
                      InputLabelProps={{
                        style: {
                          color: "#ccece6",
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                    />
                    {subjectError && (
                      <label className={classes.error}>{subjectError}</label>
                    )}
                  </div>

                  <div style={{ padding: "1rem" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <TextField
                      label="Message"
                      multiline
                      required
                      fullWidth
                      rows={10}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (message) setMessageError("");
                      }}
                      variant="outlined"
                      style={{
                        color: "#ccece6",
                      }}
                      InputLabelProps={{
                        style: {
                          color: "#ccece6",
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                    />
                    {messageError && (
                      <label className={classes.error}>{messageError}</label>
                    )}
                  </div>
                  <div
                    className={classes.submitBtn}
                    style={
                      isSubmitButtonDisabled
                        ? {
                            color: "#ccece6",
                            background: "#242a38",
                            cursor: "not-allowed",
                          }
                        : {}
                    }
                    onClick={!isSubmitButtonDisabled ? handleSubmit : null}
                  >
                    {mailStatus.message}
                  </div>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default ContactContainer;
