import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import TicketQueueCard from './TicketQueueCard';



const TicketQueue = props => {
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
            key={ticket.id}
          >
            <TicketQueueCard
              key={ticket.id}
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
