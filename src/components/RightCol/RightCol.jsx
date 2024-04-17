import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  updateNormal, updateWarning, updateAlert } from '../../app/rangeSlice';


function RightCol() {
    const { range1, range2, range3} = useSelector((state) => state.range);
    const hotspotValue = useSelector((state) => state.range.hotspotValue);
    const highValue = useSelector((state) => state.range.highValue);
    const dispatch = useDispatch();
    const [status, setStatus] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState("#99cb38");

    useEffect(() => {
        const timer = setTimeout(() => {
            checkSumStatus();
        }, 500); 
        return () => clearTimeout(timer);
    }, [range1, range2, range3,hotspotValue,highValue]);

    function getMaxValue(...ranges) {
        return Math.max(...ranges);
    }
    
  
    
    const maxValue = getMaxValue(range1, range2, range3);
    console.log("Max value:", maxValue); 


    const checkSumStatus = () => {
        if (maxValue > highValue && maxValue <= hotspotValue) {
            dispatch(updateWarning())
            setStatus("Warning");
            setBackgroundColor("#ffc300");
        } else if (maxValue > hotspotValue) {
            dispatch(updateAlert())
            setStatus("Alert");
            setBackgroundColor("#ff0000");
        } else {
            dispatch(updateNormal())
            setStatus("Normal");
            setBackgroundColor("#99cb38");
        }
    };

    return (
        <>
            <div className="shadow p-5 mb-2 rounded border border-dark-subtle text-dark-emphasis fw-medium justify-content-center align-content-center" style={{ backgroundColor: backgroundColor ,minHeight:"35vh"}}>
                <p className='text-white fs-2'>{maxValue}</p>
            </div>
            {status && <div>Status: {status}</div>}
        </>
    );
}

export default RightCol;
