import React from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'

// factor: x, utility: y
/*
const data = [
	{ factor: 'factor1', groupA: 100 },
	{ factor: 'factor2', groupA: 200 },
	{ factor: 'factor3', groupA: 300 },
	{ factor: 'factor4', groupA: 200 },
]
*/
const data = [
	{ factor: 'factor1', groupA: 100, groupB: 200 },
	{ factor: 'factor2', groupA: 200, groupB: 700 },
	{ factor: 'factor3', groupA: 400, groupB: 100 },
	{ factor: 'factor4', groupA: 500, groupB: 50 },
]

const Graph = () => {
	return (
		<div>
			<LineChart data={data} width={700} height={300}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="factor" />
				<YAxis />
				<Line type="monotone" dataKey="groupA" />
				<Line type="monotone" dataKey="groupB" />
			</LineChart>
		</div>
	)
}

export default Graph;