import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { updateHotspotValue, updateHighValue } from '../../app/rangeSlice';

function Change() {
  const dispatch = useDispatch();
  const hotspotValue = useSelector((state) => state.range.hotspotValue);
  const highValue = useSelector((state) => state.range.highValue);

  
  const [hotspotVal, setHotspotVal] = useState(hotspotValue);
  const [highVal, setHighVal] = useState(highValue);
  const [error, setError] = useState('');

  useEffect(() => {
    setHotspotVal(hotspotValue);
    setHighVal(highValue);
  }, [hotspotValue, highValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(highVal) >= parseInt(hotspotVal)) {
      setError("High Threshold must be lower than Hotspot Threshold");
      return;
    } else {
      setError("Value is set");
      dispatch(updateHotspotValue(hotspotVal));
      dispatch(updateHighValue(highVal));
      console.log(hotspotVal, highVal);
    }
  };

  const removeError=()=>{
    setError("");
  }

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="text-white grey"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        change
      </button>

      {/* Modal */}
      <div
        className="modal fade text-black"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={removeError}
              ></button>
            </div>
            <div className="modal-body">
              {/*  */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="hotspotValue" className="form-label">
                    Hotspot Threshold {hotspotVal} (deg C)
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="hotspotValue"
                    value={hotspotVal}
                    onChange={(e) => setHotspotVal(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="highValue" className="form-label">
                    High Threshold {highVal} (deg C)
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="highValue"
                    value={highVal}
                    onChange={(e) => setHighVal(e.target.value)}
                  />
                </div>
                {error && <div className="text-black">{error}</div>}
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </form>
              {/*  */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={removeError}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Change;
