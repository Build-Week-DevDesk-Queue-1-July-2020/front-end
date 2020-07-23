import React from 'react';
import useForm from "react-hook-form";






const Login = (props) => {

    return (
        <>
        <div>
            <h1>Login page</h1>
        </div>
        
        <form>
          
            <label htmlFor="loginName">Login Name:  </label>
            <input 
                type="email" 
                id="loginName" 
                placeholder="enter email address"
            
            />

            <br/>

            <label htmlFor="enterPassword">Enter Password :</label>
            <input
                type="password"
                id="enterPassword"
                placeholder="Enter Password"

            />

            <br/>

            <input type="submit"/>
        




          


        </form>
        </>
        
    );
    
};



export default Login;