import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const countries = useLoaderData()
    return (
        <div>
            <h1>Total Countries : {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map((country, index) => <Country
                    key={index}
                    country = {country}
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;