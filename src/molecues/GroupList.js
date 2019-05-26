import React from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


const groupList = [
	{id: 1, groupName: 'groupA'},
	{id: 2, groupName: 'groupB'}
]

const GroupList = () => {
	console.log(groupList)
	return (
		<div>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Group</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{groupList.map(group => (
						<TableRow key={group.id}>
							<TableCell>{group.groupName}</TableCell>
						</TableRow>
					))}

				</TableBody>
			</Table>
		</div>
	)
}

export default GroupList;