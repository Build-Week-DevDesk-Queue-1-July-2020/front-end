import React from 'react';
// Material-UI imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
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


const TicketQueueCard = ({age, category, title, owner}) => {
    const classes = useStyles();

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
          </div>
        </CardContent>
      </Card>
    );
};


export default TicketQueueCard;