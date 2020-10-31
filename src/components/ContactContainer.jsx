import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { AiFillWechat } from "react-icons/ai";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 2rem",
    background: "#242a38",
  },
  contactMsg: {
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      padding: "1rem 5.2rem !important",
    },
    alignSelf: "center",
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
    color: "#dbe8d4",
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#dbe8d4 !important",
  },
  submitBtn: {
    width: "5rem",
    padding: "1rem",
    cursor: "pointer",
    border: "1px solid",
    borderRadius: "5px",
    margin: "1rem auto",
    background: "#dbe8d4",
    color: "#242a38",
    fontWeight: "800",
    fontSize: "1.1rem",
    "&:hover": {
      color: "#dbe8d4",
      background: "#242a38",
    },
  },
  error: {
    color: "#ff0800",
  },
}));

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

  const [mailStatus, setMailStatus] = useState({
    color: "#55ff00",
    message: "Sending your message to me...",
    display: "none",
  });

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
      setMailStatus((prevState) => {
        return {
          color: prevState.class,
          message: prevState.message,
          display: "block",
        };
      });
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          { name, email, subject, message },
          process.env.REACT_APP_USER_ID
        )
        .then(
          () => {
            setMailStatus(() => {
              return {
                color: "#55ff00",
                message: "Message Sent!",
                display: "block",
              };
            });

            setNameError("");
            setEmailError("");
            setSubjectError("");
            setMessageError("");
          },
          (err) => {
            console.log(err);
            setMailStatus(() => {
              return {
                color: "#ff0800",
                message:
                  "Hah! Weird... Your message was not sent... Try again later",
                display: "block",
              };
            });
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
      <div ref={refProp} className={classes.root}>
        <h2>{"Keep in Touch"}</h2>
        <div className={classes.contact}>
          <Grid container spacing={3}>
            <Grid item className={classes.contactMsg}>
              <AiFillWechat style={{ fontSize: "7rem" }} />
              <Typography>
                {
                  "Got a question on the services that I provide? I am just a click away."
                }
              </Typography>
            </Grid>
            <Grid item className={classes.formDiv}>
              <Typography style={{ fontSize: "1.3rem" }}>
                {"Say Hi to Me"}
              </Typography>
              <Typography
                style={{
                  fontSize: ".7rem",
                  color: mailStatus.color,
                  display: mailStatus.display,
                }}
              >
                {mailStatus.message}
              </Typography>
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
                          color: "#dbe8d4",
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
                        else setEmailError("This does not look like an email");
                      }}
                      required
                      InputLabelProps={{
                        style: {
                          color: "#dbe8d4",
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
                        color: "#dbe8d4",
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
                      color: "#dbe8d4",
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#dbe8d4",
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
                <div className={classes.submitBtn} onClick={handleSubmit}>
                  {"Submit"}
                </div>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default ContactContainer;
