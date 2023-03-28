import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = ({country}) => {
    const {name, population, flags, ccn3} = country;
    return (
        <div className='country'>
            <p>Name: {name.common}</p>
            <p>Population: {population}</p>
            <img src={flags.png} alt="" />
            <Link to={`/name/${name.common}`}>
                <button>Explore {name.common}</button>
            </Link>
        </div>
    );
};

export default Country;