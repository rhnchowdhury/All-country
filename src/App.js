import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./Components/CountryData/Countries";
import Search from "./Components/SearchBox/Search";

function App() {
  const [allCountry, setAllCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState(allCountry);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setAllCountry(data);
        setFilteredCountries(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // country search option

  const handleSearch = (search) => {
    let value = search.toLowerCase();
    const newCountry = allCountry.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountry);
  };

  return (
    <div>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}></Search>
      <h3>Total Country: {allCountry.length}</h3>
      {isLoading && <p>Data is loading</p>}
      {error && <p>{error}</p>}
      <div className="country">
        {filteredCountries.map((country) => (
          <Countries country={country} key={country.cca2}></Countries>
        ))}
      </div>
    </div>
  );
}

export default App;
