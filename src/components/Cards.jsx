import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import "../styles/cards.css";

const Cards = ({ filterResults, selectedRegion, handleChange, iconMode }) => {
  const [results, setResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }, []);

  const filterNames = (country, filter) => {
    const words = country.name.common.toLowerCase().split(" ");

    return (
      country.name.common.toLowerCase().includes(filter.toLowerCase()) ||
      words.some((word) => word.startsWith(filter.toLowerCase()))
    );
  };

  const filteredResults = results.filter(
    (item) =>
      (filterResults.trim() === "" || filterNames(item, filterResults)) &&
      (selectedRegion && selectedRegion.value !== "All"
        ? item.region === selectedRegion.value
        : true)
  );

  return (
    <div className="container">
      {filteredResults.map((data, index) => (
        <div
          className="card-container"
          key={index}
          onClick={() => setSelectedCountry(data)}
        >
          <div className="countryImage-container">
            <img
              src={data.flags.png}
              alt={data.flags.alt}
              className="country-image"
            />
          </div>
          <div className="info-container">
            <h3 className="countryName">{data.name.common}</h3>
            <div className="countryInfo">
              <span className="countryPopulation">
                <span>Population: </span>
                {data.population.toLocaleString() || "No population"}
              </span>
              <span className="countryRegion">
                <span>Region: </span>
                {data.region || "No region"}
              </span>
              <span className="countryCapital">
                <span>Capital: </span>
                {data.capital || "No capital"}
              </span>
            </div>
          </div>
        </div>
      ))}
      {selectedCountry && (
        <InfoCard
          data={results}
          countryData={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          handleChange={handleChange}
          iconMode={iconMode}
        />
      )}
    </div>
  );
};

export default Cards;
