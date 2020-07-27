import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";


// Creating Ticket Header an Styles






export default function CreateTicket() {
    const [category, setCategory] = useState([]);

    const history = useHistory();
    useEffect(() => {
      Axios.get("API")
      .then(res => {
          console.log(res.data);
          setCategory(res.data);
        })
        .catch(e => console.log(e.message))
        .finally(() => {
          console.log("Axios request finished.");
        });
    }, []);

    function submitHandler(values, actions) {
      console.log(values, actions);
      values["status"] = "Open";
      values["student_id"] = localStorage.getItem("userId");
      // Sending form data to server

      useEffect(() => {
        axiosWithAuth()
          .post("/student/tickets/:id", values)
          .then(res => {
            console.log(res);
            if (res.status === 200) {
              history.push("/student/tickets/:id");
            }
            console.log("response", res);
            actions.resetForm();
          })
          .catch(e => console.log(e.message))
          .finally(() => {
            console.log("Axios request finished.");
          });
        })
    }

    return (
      <>
        <MainHeader>
          <Title>
            <Img
              className="main-img"
              src={require(`LOGO`)}
              alt="logo"
            />
            <h1>DevDesk</h1>
          </Title>
          <Nav>
            <Link className="nav-links" to={"/student/tickets/:id"}>
              Dashboard
            </Link>
            <Link className="nav-links" to={"/login"}>
              Sign Out
            </Link>
          </Nav>
        </MainHeader>
      </>
    )
}


        //Form Formik