import React, { useState, createContext  } from 'react'

import Graph from '../components/Graph'
import Form from '../components/Form'

export const ElementsContext = createContext();

const StrategyCanvas = () => {

	const [elements, setElements] = useState([]);
	return (
		<ElementsContext.Provider value={[elements, setElements]}>
		<div>
			<Graph />
			<Form />
		</div>
		</ElementsContext.Provider>
	)
}

export default StrategyCanvas;