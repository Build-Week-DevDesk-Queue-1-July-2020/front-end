import React, { Component } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth';
import { withRouter } from "react-router-dom";


class LoginForm extends Component {
    state = {
        credentials: {
            email: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    //This is the student login

    login = e => {
        e.preventDefault();
        e.persist();
        if (e.target.role.value === "student") {
            axiosWithAuth()
            .post("/auth/students/login", this.state.credentials)
            .then(res => {
                console.log("test", res.data.token)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("student_id", res.data.student_id);
                this.props.history.push("/students/:id/tickets/")
            })
            .catch(err => {
                console.log("Err is", err);
            });
        }else {
                axiosWithAuth()
                .post("/auth/helpers/login", this.state.credentials)
                .then(res => {
                    localStorage.setItem("token", res.data.token);
                    this.props.history.push("/helpers/:id/tickets")
                })
                .catch(err => {
                    console.log("Err is", err);
                });
        }


    };

    //This is the helpers login



    render() {
        return (
            <div>
                <form className='login_form' onSubmit={this.login}>
                    <input
                        className='input'
                        type='text'
                        name='email'
                        value={this.state.credentials.username}
                        placeholder='UserName'
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        className='input'
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        placeholder='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <select name="role">
                        <option value="student">Student</option>
                        <option value="helper">Helper</option>
                    </select>
                    <button>Please Log In</button>
                </form>
            </div>
        )
    }
}


export default withRouter(LoginForm);