////////////////////////
import React from "react";
import ShowTime from "./ShowTime";
import Icon from "./Icon";
import "./css/Weather.css";
import Converted from "./Converted";
//import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="TheCity col-6">{props.data.city}</div>

        <div className=" title_details col-6 text-capitalize">
          {props.data.description} <ShowTime date={props.data.date} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="clearfix">
            <div className="">
              <Icon code={props.data.icon} size={60} />
            </div>
          </div>
        </div>
        <div className=" col-sm ">
          <Converted celsius={props.data.temperature} />
        </div>

        <div className="col details">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
