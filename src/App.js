import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./Components/CountryData/Countries";

function App() {
  const [allCountry, setAllCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

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
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Total Country: {allCountry.length}</h1>
      {isLoading && <p>Data is loading</p>}
      {error && <p>{error}</p>}
      <div className="country">
        {allCountry.map((country) => (
          <Countries country={country} key={country.cca2}></Countries>
        ))}
      </div>
    </div>
  );
}

export default App;
