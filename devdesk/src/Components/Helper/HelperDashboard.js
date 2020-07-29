import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import styled from "styled-components";



// Header For the Helper Dashboard






// Adding API Request here
//helper pulls ticket to review
axiosWithAuth()
.get(`/helpers/tickets/${helperid}`, {
  headers: {
    Authorization: props.token
  }
})
.then(response => {
  console.log(response.data);
  setTickets(response.data);
})
.catch(e => console.log(e.message))
.finally(() => {
  console.log("Axios request finished.");
});

//helper posts ticket to student that was helped
axiosWithAuth()
.post(`/students/${studentid}/tickets/${ticketid}`, {
  headers: {
    Authorization: props.token
  }
})
.then(response => {
  console.log(response.data);
  setTickets(response.data);
})
.catch(e => console.log(e.message))
.finally(() => {
  console.log("Ticket Posted.");
});

axiosWithAuth()
.post("", {
  headers: {
    Authorization: props.token
  }
})
.then(response => {
  console.log(response.data);
  setTickets(response.data);
})
.catch(e => console.log(e.message))
.finally(() => {
  console.log("Ticket Posted.");
});

return (
    <section>
         <MainHeader>
      <Title>

      <h1>Lambda DevDesk</h1>
      </Title>
      <Nav>
          <Link className="nav-links" to={"/helper/login"}>
          Sign Out
          </Link>
          </Nav>
    </MainHeader>
      <h2>Helper Dashboard</h2>
      <div className="dashboard">
        <div>
          <Link className="nav-links" to={"/"}>
            Home
          </Link>
        </div>
        <div classname="mapContainer">
        {!tickets ? (
          <p>no tickets</p>
        ) : (
          tickets.map(tick => {
            return (
            <div className="ticket">
            <TicketCard key={tick.id} ticket={tick} token={props.token} {...props}/>
            </div>)
          })
        )}
        </div>
      </div>
    </section>
  );
