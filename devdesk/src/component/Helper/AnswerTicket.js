import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";






// Info / Styling on text For AnswerTicket








 // Sending form data to server
 axios
 .post(" :id", values)
 .then(res => {
   actions.resetForm();
   console.log(res);
   if (res.status === 200) {
     props.history.push("/student/dashboard");
   }
   console.log("response", res);
   actions.resetForm();
 })
 .catch(e => console.log(e.message))
 .finally(() => {
   console.log("Axios request finished.");
 });
}



//  Body then Fomik Form 


