import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateSum } from '../../app/rangeSlice';

function RightCol() {
    const { sum } = useSelector((state) => state.range);
    const hotspotValue = useSelector((state) => state.range.hotspotValue);
    const highValue = useSelector((state) => state.range.highValue);

    let backgroundColor = "#99cb38";

    if (sum > highValue && sum <= hotspotValue) {
        backgroundColor = "#ffc300";
    } else if (sum > hotspotValue) {
        backgroundColor = "#ff0000";
    }

    return (
        <>
            <div className="shadow p-5 mb-2 rounded border border-dark-subtle text-dark-emphasis fw-medium" style={{ backgroundColor: backgroundColor }}>
                {sum}
            </div>
        </>
    );
}

export default RightCol;
