import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Grow from '@material-ui/core/Grow'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

const AddMolecues = ({label}) => {

	const [isOpen, setIsOpen] = useState(false)
	const handleChange = () => {
		console.log('passed')
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<Fab onClick={handleChange}>
				<AddIcon />
			</Fab>
			{isOpen 
			? <p>open</p>
			: <p>close</p>
			}
			<Grow in={isOpen}>
				<form>
					<TextField 
						label={label}
						variant="outlined"
					/>
					<Button>
						<SaveIcon />
						SAVE
					</Button>
				</form>
			</Grow>
		</div>
	)
}

export default AddMolecues;