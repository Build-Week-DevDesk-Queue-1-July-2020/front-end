import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
// Material-UI imports
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles({
    root: {
        display: "inline-block"
    },
    button: {
      marginTop: "32px",
      backgroundColor: "#00B4D8",
      "&:hover": {
        boxShadow: "none",
        backgroundColor: "#0077B6"
      },
    },
    refreshIcon: {
      fontSize: "16px",
      marginRight: "6px",
    },
    paper: {
      boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.02), 2px 3px 8px rgba(0, 0, 0, 0.02)",
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



const TicketCreation = (props) => {
    const { register, handleSubmit, control, errors, reset } = useForm();
    const classes= useStyles();
    const [successfulSubmission, setSuccessfulSubmission] = useState(false);
    const history = useHistory();

    const submitHandler = (data, e) => {
        data.student_id = localStorage.getItem("student_id");

        axiosWithAuth()
        .post(`/students/${data.student_id}/tickets/`, data)
        .then( res => {
            if(res.status === 200) {
                history.push("/student/tickets/:id");
            }
        })
        .catch( err => console.log(err))
        .finally( () => {
            console.log("Axios request finished.");
            e.target.reset();
            setSuccessfulSubmission(true);
        });
    };


    return (
        <div display="flex" >
            <h1>Let's submit a help ticket.</h1>
            <Card className={classes.root}>
                <CardContent>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div>
                            <TextField
                                id="title"
                                label="What's going on?"
                                variant="outlined"
                                required
                                inputRef=
                                    {register(
                                        { required: {value: true, message: "Title is required" }})
                                    }
                                name='title'
                                className={classes.paper}
                                error={'title' in errors}
                                helperText={'title' in errors ? errors.title.message : null}
                            />
                        </div>
                        <div>
                        <Controller
                            as={
                                <Select
                                    variant="outlined"
                                    className={classes.paper}
                                >
                                    <MenuItem value='react'>React</MenuItem>
                                    <MenuItem value='javascript'>JavaScript</MenuItem>
                                    <MenuItem value='html'>HTML</MenuItem>
                                </Select>

                            }
                            control={control}
                            name="category"
                            defaultValue='react'
                        />
                        </div>
                        <div>
                            <TextField
                                id="tried"
                                label="What have you tried?"
                                multiline
                                rows={4}
                                variant="outlined"
                                name="what_ive_tried"
                                inputRef={register(
                                    { required: {value: true, message: "Title is required" }})
                                }
                                className={classes.paper}
                            />
                        </div>
                        <div>
                            <TextField
                                id="notes"
                                label="Anything else we should know?"
                                multiline
                                rows={4}
                                variant="outlined"
                                name="description"
                                inputRef={register}
                                className={classes.paper}
                            />
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}
                            >
                                Submit Ticket
                            </Button>
                        </div>
                    </form>
                </CardContent>
                {successfulSubmission ? <Alert severity="success">Your ticket was successfully submitted!</Alert> : null }
            </Card>
        </div>
    );
};

export default TicketCreation;