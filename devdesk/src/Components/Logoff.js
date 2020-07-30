import React from 'react';
import { Redirect } from 'react-router-dom';

const Logoff = () => {
    localStorage.removeItem("token");

    return <Redirect to="/login" />;
}

export default Logoff;