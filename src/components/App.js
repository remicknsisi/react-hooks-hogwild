import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import Filter from "./Filter";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {
	const [selectedName, setSelectedName] = useState('')
    const [selectedWeight, setSelectedWeight] = useState(0)
	const [filterValue, setFilterValue] = useState(true)

	function handleFilterUpdate(){
        setFilterValue(!filterValue)
    }

	const hogsToDisplay = hogs.filter(hog => hog.greased !== filterValue && (hog.name.toLowerCase().includes(selectedName) && hog.weight.toString().includes(selectedWeight)))

	return (
		<div className="App">
			<Nav />
			<Filter onFilterUpdate={handleFilterUpdate}/>
			<Sort selectedName={selectedName} setSelectedName={setSelectedName} selectedWeight={selectedWeight} setSelectedWeight={setSelectedWeight}/>
			<div className="ui grid container">
				{hogsToDisplay.map(hog => (<HogTiles key={hog.specialty} hog={hog}/>))}
			</div>
		</div>
	);
}

export default App;
