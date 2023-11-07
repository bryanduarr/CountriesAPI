import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/infoCard.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const InfoCard = ({ onClose, countryData, data, handleChange, iconMode }) => {
  const [selectedCountryBorder, setSelectedCountryBorder] =
    useState(countryData);
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const borderCca3 = selectedCountryBorder.borders;

  const countryBorders = Array.isArray(borderCca3)
    ? borderCca3.map((cca3) => {
        const country = data.find(
          (countriesData) => countriesData.cca3 === cca3
        );
        return country ? country.name.common : "";
      })
    : [];

  const redirectCountry = (selectedBorder) => {
    const selectedCountry = data.find(
      (country) => country.name.common === selectedBorder
    );
    if (selectedBorder) {
      setSelectedCountryBorder(selectedCountry);
    }
  };

  return (
    <div className="infoContent-container">
      <div className="header-infoContent">
        <Header handleChange={handleChange} iconMode={iconMode} />
      </div>
      <div className="infoCountry-container">
        <div className="infoCountry-content">
          <div className="cardInfo-flagNBack">
            <button onClick={onClose} className="backButton">
              <AiOutlineArrowLeft />
              Back
            </button>
            <div className="imageInfo-Container">
              {selectedCountryBorder && (
                <img
                  src={selectedCountryBorder.flags.png}
                  alt={selectedCountryBorder.flags.alt}
                  className="countryInfo-image"
                />
              )}
            </div>
          </div>
          <div className="countryInfo-container">
            <h3>
              {selectedCountryBorder && selectedCountryBorder.name.common}
            </h3>
            <div className="countryInformation-container">
              <div className="cardInfoFirst-container">
                <span>
                  <span>Native Name: </span>
                  {selectedCountryBorder.name.nativeName
                    ? selectedCountryBorder.name.nativeName[
                        Object.keys(selectedCountryBorder.name.nativeName)[0]
                      ].common
                    : "No native name Available"}
                </span>
                <span>
                  <span>Population: </span>
                  {selectedCountryBorder.population.toLocaleString() ||
                    "No population Available"}
                </span>
                <span>
                  <span>Region: </span>
                  {selectedCountryBorder.region || "No region available"}
                </span>
                <span>
                  <span>Sub Region: </span>
                  {selectedCountryBorder.subregion || "No sub region available"}
                </span>
                <span>
                  <span>Capital: </span>
                  {selectedCountryBorder.capital || "No capital available"}
                </span>
              </div>
              <div className="cardInfoSecond-container">
                <span>
                  <span>Top Level Domain: </span>
                  {selectedCountryBorder.tld || "No level domain available"}
                </span>
                <span>
                  <span>Currencies: </span>
                  {(selectedCountryBorder.currencies &&
                    Object.values(selectedCountryBorder.currencies)[0]?.name) ||
                    "No currencies available"}
                </span>
                <span>
                  <span>Languages: </span>
                  {(selectedCountryBorder.languages &&
                    Object.values(selectedCountryBorder.languages)?.join(
                      ",  "
                    )) ||
                    "No languages available"}
                </span>
              </div>
            </div>
            <span className="country-borders">
              <span>Border Countries:</span>
              {countryBorders.length > 0 ? (
                countryBorders.map((borders, index) => (
                  <div
                    className="borders"
                    key={index}
                    onClick={() => redirectCountry(borders)}
                  >
                    {borders}
                  </div>
                ))
              ) : (
                <span>No Borders</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
