import React, { useEffect, useState } from "react";
import "./LeftCol.css";
import { useDispatch, useSelector  } from "react-redux";
import {  updateRange1, updateRange2, updateRange3  } from '../../app/rangeSlice';

function LeftCol1() {
  const dispatch = useDispatch();
 
  // const hotspotValue = useSelector((state) => state.range.hotspotValue);
  // const highValue = useSelector((state) => state.range.highValue);

  const [rangeValue1, setRangeValue1] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);
  const [rangeValue3, setRangeValue3] = useState(0);

  const handleRangeChange1 = (event) => {
    setRangeValue1(event.target.value);
  };
  const handleRangeChange2 = (event) => {
    setRangeValue2(event.target.value);
  };

  const handleRangeChange3 = (event) => {
    setRangeValue3(event.target.value);
  };

  useEffect(() => {
console.log(parseInt(rangeValue1))
console.log(parseInt(rangeValue2))
console.log(parseInt(rangeValue3))
    
   
    dispatch(updateRange1(parseInt(rangeValue1)));
    dispatch(updateRange2(parseInt(rangeValue2)));
    dispatch(updateRange3(parseInt(rangeValue3)));

  }, [rangeValue1, rangeValue2, rangeValue3, dispatch]);


  return (
    <>
      <div className="shadow px-1 py-2 rounded mb-4 border border-dark-subtle LeftContainerOuter">
        <div className="row d-flex justify-content-center">
          <div className="col-12 py-1 d-flex justify-content-center align-items-center">
            <div className="col-2">13</div>
            <div className="col-6">ORI-CM-BUSH</div>
            <div className="col-4">ZONE-40</div>
          </div>

          <div className="col-12 py-1 d-flex justify-content-center align-items-center">
            <div className="LeftContainerInner">
              <div className="col-12 py-1 d-flex justify-content-center align-items-center">
                <div className="col-2">13</div>
                <div className="col-4">battery</div>
                <div className="col-4">
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    
                    value={rangeValue1}
                    onChange={handleRangeChange1}
                  />
                </div>
                <div className="col-2">{rangeValue1}</div>
              </div>

              <div className="col-12 py-1 d-flex justify-content-center align-items-center">
                <div className="col-2">13</div>
                <div className="col-4">battery</div>
                <div className="col-4">
                <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    value={rangeValue2}
                    onChange={handleRangeChange2}
                  />
                </div>
                <div className="col-2">{rangeValue2}</div>
              </div>

              <div className="col-12 py-1 d-flex justify-content-center align-items-center">
                <div className="col-2">13</div>
                <div className="col-4">battery</div>
                <div className="col-4">
                <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    value={rangeValue3}
                    onChange={handleRangeChange3}
                  />
                </div>
                <div className="col-2">{rangeValue3}</div>
              </div>
            </div>
          </div>

          <div className="col-12 pt-1 d-flex justify-content-start align-items-center ms-4">
            <p>GURGAON: LOCATION...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftCol1;
