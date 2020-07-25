import React from "react";
import { useForm, Controller } from "react-hook-form";
// Material-UI imports
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "inline-block",
  },
  button: {
    marginTop: "32px",
    backgroundColor: "#00B4D8",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0077B6",
    },
  },
  refreshIcon: {
    fontSize: "16px",
    marginRight: "6px",
  },
  paper: {
    boxShadow:
      "2px 4px 10px rgba(0, 0, 0, 0.02), 2px 3px 8px rgba(0, 0, 0, 0.02)",
    background: "#FFFFFF",
    bordeRadius: "4px",
    width: "343px",
    marginTop: "32px",
  },
  "@global": {
    "form > :first-child > div": {
      marginTop: "10px",
    },
  },
});

const Register = (props) => {
  const { register, handleSubmit, control, errors } = useForm();
  const classes = useStyles();
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div display="flex">
      <h1>Create An Account</h1>
      <Card className={classes.root}>
        <CardContent>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                required
                inputRef={register({
                  required: { value: true, message: "First Name is required" },
                })}
                name="firstName"
                className={classes.paper}
                error={"firstName" in errors}
                helperText={
                  "firstName" in errors ? errors.firstName.message : null
                }
              />
            </div>
            <div>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                required
                inputRef={register({
                  required: { value: true, message: "Last Name is required" },
                })}
                name="lastName"
                className={classes.paper}
                error={"lastName" in errors}
                helperText={
                  "lastName" in errors ? errors.lastName.message : null
                }
              />
            </div>
            <div>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                required
                inputRef={register({
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                name="email"
                className={classes.paper}
                error={"email" in errors}
                helperText={"email" in errors ? errors.email.message : null}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                required
                inputRef={register({
                  required: { value: true, message: "A password is required" },
                })}
                name="password"
                className={classes.paper}
                type="password"
                error={"password" in errors}
                helperText={
                  "password" in errors ? errors.password.message : null
                }
              />
            </div>
            <div>
              <Controller
                as={
                  <Select variant="outlined" className={classes.paper}>
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="helper">Helper</MenuItem>
                  </Select>
                }
                control={control}
                name="role"
                defaultValue="student"
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
