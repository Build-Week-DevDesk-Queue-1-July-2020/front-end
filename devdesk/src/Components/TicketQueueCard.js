import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
// Material-UI imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    display: "inline-block",
    width: "750px"
  },
  button: {
    marginTop: "32px",
    backgroundColor: "#00B4D8",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0077B6",
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  age: {
    textAlign: 'left',
  },
  content: {
    width: 'fit-content'
  },
  cover: {
    width: 151,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginLeft: '20px',
  },
  owner: {
    alignItems: 'end',
    alignContent: 'center',
    alignSelf: 'center',
    marginLeft: '20px',
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
  },
  categoryChip: {
    width: 'fit-content',
    marginLeft: '32px',
  },
});


const TicketQueueCard = ({category, title, owner, id, description, status, tried, student}) => {
    const classes = useStyles();

    const assignHandler = e => {
      axiosWithAuth()
      .put(`/helpers/${localStorage.getItem('helper_id')}/tickets/${id}/inprogress`)
      .then( res => console.log(res.data) )
      .catch( err => console.log(err) );
    };

    return (
        <Card className={classes.root}>
        <CardContent>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.age} variant="h2">
                {title}
              </Typography>
            </CardContent>
            <CardContent>
              <div className={classes.info}>
                <Typography variant="button">
                  Student:
                </Typography>
                <Typography variant="subtitle2">
                {student}
              </Typography>
              </div>
            </CardContent>

            <CardContent>
              <div className={classes.info}>
                <Typography variant="button">
                  Description of issue:
                </Typography>
                <Typography>
                    {description}
                </Typography>
              </div>
            </CardContent>
            <CardContent>
              <div className={classes.info}>
                <Typography variant="button">
                  What the student has tried:
                </Typography>
                <Typography>
                    {tried}
                </Typography>
              </div>
            </CardContent>
            <CardContent className={classes.chips}>
              <Chip label={category} className={classes.categoryChip} />
              <Chip label={status} className={classes.categoryChip} />
            </CardContent>
            <CardContent>
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    className={classes.button}
                    onClick={assignHandler}
                >
                    Assign to Me
                </Button>
              </CardContent>
          </div>
        </CardContent>
      </Card>
    );
};


export default TicketQueueCard;