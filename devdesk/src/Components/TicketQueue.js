import React from 'react';
import TicketQueueCard from './TicketQueueCard';
// Material-UI imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
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

  return (
    <div display='flex'>
      <h1>The Queue</h1>
      <TicketQueueCard
        age='1 DAY OLD'
        category='Equipment Issue'
        title="My laptop isn't working anymore"
        owner='H'
      />
      <TicketQueueCard
        age='2 DAYs OLD'
        category='People Issue'
        title="My team isn't communicating well"
        owner='A'
      />
      <TicketQueueCard
        age='3 DAY OLD'
        category='Finance Issue'
        title="Something's wrong with my billing"
        owner='W'
      />
    </div>
  );
};




  export default TicketQueue;
