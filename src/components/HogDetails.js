import React from "react";

function HogDetails ({ hog }){

    const { weight, specialty } = hog

    return (
        <div>
            <p>Weight: {weight}</p>
            <p>Specialty: {specialty}</p>
        </div>
    )
}

export default HogDetails;