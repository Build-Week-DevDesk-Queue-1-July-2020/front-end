import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
      marginTop: "32px"
    },
});

const TicketCreation = (props) => {
    const { register, handleSubmit, control } = useForm();
    const submitHandler = data => console.log(data);
    const classes= useStyles();

    return (
        <div>
            <h1>Let's submit a help ticket.</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="What's going on?"
                        variant="outlined"
                        inputRef={register}
                        name='title'
                        className={classes.paper}
                    />
                </div>
                <div>
                <Controller
                    as={
                        <Select
                            label="What is this issue about?"
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
                        inputRef={register}
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
        </div>
    );
};

export default TicketCreation;