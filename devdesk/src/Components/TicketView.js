import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
// Material-UI imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      display: "inline-block",
      width: "750px",
      marginTop: '32px',
    },
    button: {
      backgroundColor: "#00B4D8",
      marginRight: '15px',
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
    buttons: {
      width: 'fit-content',
      display: 'flex',
      justifyContent: 'space-around',
    },
  });


  const TicketView = ( props ) => {
      const classes = useStyles();
      const { id } = useParams();
      const [ticket, setTicket] = useState({});

      const resolveHandler = e => {
        axiosWithAuth()
        .put(`/helpers/${localStorage.getItem('helper_id')}/tickets/${id}/completed`)
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
      };

      const reassignHandler = e => {
        axiosWithAuth()
        .put(`/helpers/${localStorage.getItem('helper_id')}/tickets/${id}/open`)
        .then( res => console.log(res.data) )
        .catch( err => console.log(err) );
        props.history.push(`/helpers/${localStorage.getItem('helper_id')}/tickets/`);
      };

      useEffect( () => {
        axiosWithAuth()
        .get(`/helpers/tickets/${id}`)
        .then( res => {
            setTicket(res.data[0]);
        })
        .catch( err => console.log(err) );
      }, [id]);

      return (
          <Card className={classes.root}>
          <CardContent>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography className={classes.age} variant="h2">
                  {ticket.title}
                </Typography>
              </CardContent>
              <CardContent>
                <div className={classes.info}>
                  <Typography variant="button">
                    Student:
                  </Typography>
                  <Typography variant="subtitle2">
                  {ticket.by_student}
                </Typography>
                </div>
              </CardContent>

              <CardContent>
                <div className={classes.info}>
                  <Typography variant="button">
                    Description of issue:
                  </Typography>
                  <Typography>
                      {ticket.description}
                  </Typography>
                </div>
              </CardContent>
              <CardContent>
                <div className={classes.info}>
                  <Typography variant="button">
                    What the student has tried:
                  </Typography>
                  <Typography>
                      {ticket.what_ive_tried}
                  </Typography>
                </div>
              </CardContent>
              <CardContent className={classes.chips}>
                <Chip label={ticket.category} className={classes.categoryChip} />
                <Chip label={ticket.status} className={classes.categoryChip} />
              </CardContent>
              <CardContent className={classes.buttons}>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                    onClick={resolveHandler}
                >
                    Resolve Ticket
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    type="submit"
                    className={classes.reassignButton}
                    onClick={reassignHandler}
                >
                    Reassign Ticket
                </Button>
              </CardContent>
            </div>
          </CardContent>
        </Card>
      );
  };




  export default withRouter(TicketView);
