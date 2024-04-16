import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InfoBar.css";

function InfoBar() {
  return (
    <div className="overflow-hidden"> 
    <div className="row mb-3 justify-content-center text-white fw-bolder">
      <div className="col-sm-3 themed-grid-col py-3 px-1 blue">.col-sm-4</div>
      <div className="col-sm-3 themed-grid-col py-3 px-1 red">.col-sm-4</div>
      <div className="col-sm-3 themed-grid-col py-3 px-1 yellow">.col-sm-4</div>
      <div className="col-sm-1 themed-grid-col py-3 px-1 grey">.col-sm-4</div>
    </div>

    <div className="row mb-3 justify-content-center text-white fw-bolder">
      <div className="col-sm-2 themed-grid-col py-3 px-1 blue">.col-sm-4</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 grey">.col-sm-4</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 red">.col-sm-4</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 yellow">.col-sm-4</div>
      <div className="col-sm-2 themed-grid-col py-3 px-1 green">.col-sm-4</div>
    </div>
  </div>
  );
}

export default InfoBar;
