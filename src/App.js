import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/CountryData/Countries';

function App() {

  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setAllCountry(data);
      })
  }, []);

  return (
    <div>
      <h1>Total Country: {allCountry.length}</h1>
      <div className='country'>
        {
          allCountry.map(country => <Countries country={country} key={country.cca2}></Countries>)
        }
      </div>
    </div>
  );
}

export default App;
