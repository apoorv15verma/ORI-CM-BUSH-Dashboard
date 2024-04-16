import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InfoBar.css";
import { useDispatch, useSelector } from "react-redux";
import Change from "../Change/Change";

function InfoBar() {
  const {  highValue,hotspotValue } = useSelector((state) => state.range);
  return (
    <div className="overflow-hidden"> 
    <div className="row mb-3 justify-content-center text-white fw-bolder">
      <div className="col-sm-3 themed-grid-col py-3 px-1 blue">Temprature alarm settings (deg C) </div>
      <div className="col-sm-3 themed-grid-col py-3 px-1 red">Hotspot above {hotspotValue} deg C</div>
      <div className="col-sm-3 themed-grid-col py-3 px-1 yellow">High above {highValue} deg C</div>
     
      <div className="col-sm-1 themed-grid-col py-3 px-1 grey"><Change/></div>
    </div>

    <div className="row mb-3 justify-content-center text-white fw-bolder">
      <div className="col-sm-2 themed-grid-col py-3 px-1 blue">Total B</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 grey">2 Offline</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 red">0 alert</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 yellow">0 warnig</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 green">6 Normal</div>
    </div>
  </div>
  );
}

export default InfoBar;
