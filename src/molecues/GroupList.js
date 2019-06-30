import React, { useContext, useEffect } from 'react';
import { IndustryListContext } from '../pages/IndustryList'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Link } from 'react-router-dom'


const groupList = [
	{id: 1, groupName: 'groupA'},
	{id: 2, groupName: 'groupB'}
]

const GroupList = () => {
	const [getIndustryList, industryList] = useContext(IndustryListContext);

	useEffect(() => {
		getIndustryList()
		console.log(industryList)
	}, [])

	//console.log(groupList)
	return (
		<div>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Group</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					
					{industryList.map(group => (
						<TableRow key={group.id}>
							<TableCell>
								<Link to={`/industrylist/${group.id}`}>
							{group.name}
							</Link>
							</TableCell>
						</TableRow>
					))}
					 

				</TableBody>
			</Table>
		</div>
	)
}

export default GroupList;