import React from "react";

function Filter ({ onFilterUpdate }){

    return (
        <div>
            <label>Filter by Greased: </label>
            <select onChange={onFilterUpdate}>
                <option value="true">Greased</option>
                <option value="false">Ungreased</option>
            </select>
        </div>
    )
}

export default Filter;