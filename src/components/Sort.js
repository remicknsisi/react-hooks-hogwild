import React from "react";

function Sort ({ selectedName, setSelectedName, selectedWeight, setSelectedWeight }){

    return (
        <div>
            <label>Search by name:</label>
                <input type="text" 
                placeholder="Search by name..."
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)} />
            <label>Search by weight:</label>
                <input type="number" 
                placeholder="Search by weight..."
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)} />
        </div>
    )
}

export default Sort;