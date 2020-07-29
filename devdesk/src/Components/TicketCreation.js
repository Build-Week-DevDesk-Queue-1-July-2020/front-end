import React from 'react';
import { useForm, Controller } from 'react-hook-form';
// Material-UI imports
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";

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
    const { register, handleSubmit, control, errors } = useForm();
    const classes= useStyles();
    const submitHandler = data => console.log(data);


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
                                name="tried"
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
                                name="notes"
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
            </Card>
        </div>
    );
};

export default TicketCreation;