import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogTiles ({ hog }){

    const { name, image } = hog

    const [isDisplayed, setIsDisplayed] = useState(false)

    function handleClick(){
        !isDisplayed ? setIsDisplayed(true) : setIsDisplayed(false)
    }

    return (
        <div className="ui eight wide column" onClick={handleClick}>
            <p>{name}</p>
            <img alt={hog} src={image}/>
            {isDisplayed ? (<HogDetails hog={hog}/>) : null}
        </div>
    )
}

export default HogTiles;