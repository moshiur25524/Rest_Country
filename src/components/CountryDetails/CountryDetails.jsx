import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const country = useLoaderData();
    console.log(country[0]);
    const { name, flags, area, population } = country[0];
    const countryDetails = {
        width: "50%",
        margin: '0 auto'
    }
    return (
        <div style={countryDetails}>
            <div>
                <h1>Detail Information of {name.common}</h1>
                <p>Name: {name.common}</p>
                <p>Area: {area}</p>
                <p>Population: {population}</p>
                <img src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default CountryDetails;