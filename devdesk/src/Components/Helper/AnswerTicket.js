import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// Info / Styling on text For AnswerTicket

// Sending ticket ids to server
useEffect(() => {
  axiosWithAuth()
    .post("/helper/tickets/:ticketsid", values)
    .then((res) => {
      actions.resetForm();
      console.log(res);
      if (res.status === 200) {
        props.history.push("/students/:id/tickets/:ticketId");
      }
      console.log("response", res);
      actions.resetForm();
    })
    .catch((e) => console.log(e.message))
    .finally(() => {
      console.log("Axios request finished.");
    });
});

//  Body then Formik Form
