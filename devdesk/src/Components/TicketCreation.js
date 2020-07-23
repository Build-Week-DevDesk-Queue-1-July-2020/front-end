import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const TicketCreation = (props) => {
    const { register, handleSubmit, control } = useForm();
    const submitHandler = data => console.log(data);

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
                    />
                </div>
                <div>
                <Controller
                    as={
                        <Select
                            label="What is this issue about?"
                            variant="outlined"
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
                    />
                </div>
                <div>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit Ticket
                </Button>
                </div>
            </form>
        </div>
    );
};

export default TicketCreation;