import React from "react";
import "../styles/filters.css";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";
const Filters = ({
  filterResults,
  setFilterResults,
  selectedRegion,
  setSelectedRegion,
}) => {
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Antarctic", label: "Antarctic" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
    { value: "All", label: "All" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
  };

  const customStyle = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    control: (provided) => ({
      ...provided,
      border: "none",
      width: "13rem",
      padding: "9px",
      cursor: "pointer",
      caretColor: "transparent",
      fontWeight: "600",
      fontSize: "17px",
      userSelect: "none",
      boxShadow: "0px 2px 3px 1px var(--header-divider)",
      backgroundColor: "var(--boxes-background)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--text-color)",
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      color: "red",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--boxes-background)",
      color: "var(--text-color)",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
      borderRadius: "3px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--text-color)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "var(--select-selected)" : null,
      ":hover": {
        backgroundColor: "var(--hover)",
        color: "var(text-color)",
        transition: "all 0.1s ease",
      },
    }),
  };
  return (
    <div className="filters-container">
      <div className="another-container">
        <div className="search-input">
          <BiSearch />
          <input
            type="text"
            placeholder="Search for a counrty..."
            value={filterResults}
            onChange={(e) => setFilterResults(e.target.value)}
          />
        </div>
        <Select
          options={options}
          defaultValue={selectedRegion}
          placeholder="Filter by Region"
          onChange={handleChange}
          styles={customStyle}
          className="select-options"
        />
      </div>
    </div>
  );
};

export default Filters;
