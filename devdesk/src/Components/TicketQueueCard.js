import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
// Material-UI imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    display: "inline-block",
    width: "700px"
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
});


const TicketQueueCard = ({age, category, title, owner, id}) => {
    const classes = useStyles();

    const assignHandler = e => {
      axiosWithAuth()
      .put(`/helpers/${localStorage.getItem('helper_id')}/tickets/${id}/inprogress`)
      .then( res => console.log(res.data) )
      .catch( err => console.log(err) )
      .finally( console.log('Axios call completed'));
    };

    return (
        <Card className={classes.root}>
        <CardContent>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.age} variant="subtitle1" color="textSecondary">
                {age}
              </Typography>
            </CardContent>
            <Divider orientation="vertical" flexItem />
            <CardContent>
              <div className={classes.info}>
                <Typography component="h5" variant="h5">
                    {category}
                </Typography>
                <Typography>
                    {title}
                </Typography>
              </div>
            </CardContent>
            <CardContent>
              <div className={classes.owner}>
                <Avatar className="ownerAvatar">{owner}</Avatar>
              </div>
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