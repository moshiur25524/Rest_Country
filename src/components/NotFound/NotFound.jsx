import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    const handleReturnHme = () =>{
        navigate('/home')
    }
    return (
        <div>
            <h1>404</h1>
            <p>The Page you are looking for is not found</p>
            <button onClick={handleReturnHme}>&lt; Home</button>
        </div>
    );
};

export default NotFound;