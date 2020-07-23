import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// Info / Styling on text For AnswerTicket

<<<<<<< HEAD







 // Sending form data to server
 useEffect() {
 axiosWithAuth()
 .post(" /helper/tickets/:id", values)
 .then(res => {
   actions.resetForm();
   console.log(res);
   if (res.status === 200) {
     props.history.push("/helper/tickets/:id");
   }
   console.log("response", res);
   actions.resetForm();
 })
 .catch(e => console.log(e.message))
 .finally(() => {
   console.log("Axios request finished.");
 });
}




//  Body then Hook-Form


=======
// Sending ticket ids to server
useEffect(() => {
  axiosWithAuth()
    .post("/helper/tickets/:ticketsid", values)
    .then((res) => {
      actions.resetForm();
      console.log(res);
      if (res.status === 200) {
        props.history.push("/student/dashboard");
      }
      console.log("response", res);
      actions.resetForm();
    })
    .catch((e) => console.log(e.message))
    .finally(() => {
      console.log("Axios request finished.");
    });
});

//  Body then Fomik Form
>>>>>>> 6a1bcbec53b16e4bcd78344e1fac3964e083c0ab
