import React from 'react';
import './Countries.css'

const Countries = ({ country }) => {

    const { name, capital, flags, continents, region, population } = country;

    return (
        <div className='countries'>
            <h2>{name.common}</h2>
            <h4>Capital: {capital}</h4>
            <h5>Continents: {continents}</h5>
            <h5>Region: {region}</h5>
            <h5>Population: {population}</h5>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Countries;