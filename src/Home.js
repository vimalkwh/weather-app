import React from "react";
import "./App.css";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Home({ location, current }) {
  return (
    <div className="weather__container">
      <div className="weather__bgImg"></div>
      <div className="bg__overlay"></div>
      <div className="weather__info">
        <div className="weather__top">
          <p>Weatherman</p>
        </div>
        <div className="weather__middle">
          <LocationOnIcon />
          <h3>{location.name}</h3>
          <h4>
            {location.region}, {location.country}
          </h4>
          <p>{location.localtime}</p>

          <h1 className="middle__temp">
            {current.temp_c}
            <span>&#176;</span>
            <small>C</small>
          </h1>
          <h5 className="middle__break">------------------------</h5>
          <FilterDramaIcon />
          <h4 className="weather__condition">{current.condition.text}</h4>
          <h4>
            Feels like {current.feelslike_c}
            <span>&#176;</span>C
          </h4>
        </div>
        <div className="weather__bottom">
          <div className="bottom__item">
            <p>Cloud</p>
            <p>{current.cloud} %</p>
          </div>
          <div className="bottom__item">
            <p>Wind</p>
            <p>{current.wind_kph} KM/H</p>
          </div>
          <div className="bottom__item">
            <p>Visibility</p>
            <p>{current.vis_km} KM</p>
          </div>
          <div className="bottom__item">
            <p>Humidity</p>
            <p>{current.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
