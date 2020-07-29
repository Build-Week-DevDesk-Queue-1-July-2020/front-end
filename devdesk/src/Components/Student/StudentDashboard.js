import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import styled from "styled-components";

// Header Styled

export default function StudentDashboard(props) {
  // Adding useState to track data from useEffect
  const [tickets, setTickets] = useState([]);
  console.log(tickets);

  useEffect(() => {
    // Adding API Request here
    axiosWithAuth()
      .post("/student/:id/tickets", {
        headers: {
          Authorization: props.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTickets(response.data);
      })
      .catch((e) => console.log(e.message))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }, []);

  axiosWithAuth()
    .put("/student/:id/tickets/:ticketid", {
      headers: {
        Authorization: props.token,
      },
    })
    .then((response) => {
      console.log(response.data);
      setTickets(response.data);
    })
    .catch((e) => console.log(e.message))
    .finally(() => {
      console.log("Edited Ticket Posted.");
    });

  return (
    <section>
      <MainHeader>
        <Title>
          <Img
            className="main-img"
            src={require(`IF we want to add a Lambda pic`)}
            alt="logo"
          />

          <h1> DevDesk</h1>
        </Title>
        <Nav>
          <Link className="nav-links" to={"/student/createticket"}>
            Create Ticket
          </Link>
          <Link className="nav-links" to={"/login"}>
            Sign Out
          </Link>
        </Nav>
      </MainHeader>
      <h2>Student Dashboard</h2>
      <div className="dashboard">
        {!tickets ? (
          <p>no tickets</p>
        ) : (
          tickets.map((tick) => {
            return (
              <TicketCard
                key={tick.id}
                ticket={tick}
                token={props.token}
                {...props}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
