import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import TicketQueueCard from './TicketQueueCard';
// Material-UI imports
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: '700px',
  },
  button: {
    marginTop: '32px',
    backgroundColor: '#00B4D8',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#0077B6',
    },
  },
  details: {
    display: 'flex',
  },
  age: {
    textAlign: 'left',
  },
  content: {
    width: 'fit-content',
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

const TicketQueue = props => {
  const classes = useStyles();
  const [tickets, setTickets] = useState([]);

  useEffect( () => {

    axiosWithAuth()
        .get(`/helpers/tickets`)
        .then( res => {
            console.log(res);
            setTickets(res.data);
        })
        .catch( err => console.log(err))
        .finally( () => console.log("Axios request finished."));
  }, []);

  if(!tickets.length) {
    return <div></div>
  }

  return (
    <div display='flex'>
      <h1>The Queue</h1>
      {tickets.map( (ticket) => {
        return (
          <Link
            to={`/helpers/ticket/${ticket.id}`}
          >
            <TicketQueueCard
              key={ticket.id}
              age='1 DAY OLD'
              category={ticket.category}
              title={ticket.title}
              description={ticket.description}
              owner={ticket.helper_name}
              status={ticket.status}
              tried={ticket.what_ive_tried}
              student={ticket.by_student}
              id={ticket.id}
            />
          </Link>
        )
      })}
    </div>
  );
};




  export default TicketQueue;
