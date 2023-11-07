import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

function App() {
  const [filterResults, setFilterResults] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (darkMode) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : ""}>
      <Header handleChange={handleChange} iconMode={darkMode} />
      <Filters
        filterResults={filterResults}
        setFilterResults={setFilterResults}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <Cards
        filterResults={filterResults}
        selectedRegion={selectedRegion}
        handleChange={handleChange}
        iconMode={darkMode}
      />
    </div>
  );
}

export default App;
