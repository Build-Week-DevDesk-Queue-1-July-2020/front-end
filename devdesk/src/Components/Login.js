import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";

import axiosWithAuth from '../utils/axiosWithAuth';
import { withRouter } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
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


const LoginForm = (props) => {
    const { register, handleSubmit, control, errors } = useForm();
    const classes = useStyles();

    const login = data => {
        const credentials = {email: data.email, password: data.password};
        if (data.role === "student") {
            axiosWithAuth()
            .post("/auth/students/login", credentials)
            .then(res => {
                console.log("test", res.data.token)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("student_id", res.data.student_id);
                props.history.push("/create-ticket")
            })
            .catch(err => {
                console.log("Err is", err);
            });
        } else {
                axiosWithAuth()
                .post("/auth/helpers/login", credentials)
                .then(res => {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("helper_id", res.data.helper_id);
                    props.history.push(`/helpers/${res.data.helper_id}/tickets`)
                })
                .catch(err => {
                    console.log("Err is", err);
                });
        }


    };

    return (
        <div display="flex">
            <h1>Log In To Your Account</h1>
            <Card className={classes.root}>
                <CardContent>
                    <form onSubmit={handleSubmit(login)}>
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
                                Log In
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );

};


export default withRouter(LoginForm);