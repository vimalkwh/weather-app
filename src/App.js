import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Home from "./Home";
import Error from "./Error";

function App() {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=8aab5756a1644d3a89d183411212605&q=${city}&aqi=yes`
    );
    let fetchedData = await response.json();
    setData(fetchedData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData();

    setCity("");
  };
  console.log(data);
  return (
    <>
      <div className="app__bg"></div>
      <div className="app__overlay"></div>
      <div className="app">
        <div className="app__input">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter City Name..."
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
        {data &&
          ((data.location && (
            <Home location={data.location} current={data.current} />
          )) || <Error error={data.error} />)}
      </div>
    </>
  );
}

export default App;
