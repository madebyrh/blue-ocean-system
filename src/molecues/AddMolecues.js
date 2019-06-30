import React, { useState, useContext } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Grow from '@material-ui/core/Grow'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { IndustryListContext } from '../pages/IndustryList'

import firebase from '../firebase'
import 'firebase/firestore'



const AddMolecues = ({label}) => {

	const [getIndustryList] = useContext(IndustryListContext)

	const [industry, setIndustry] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const handleChange = () => {
		console.log('passed')
		setIsOpen(!isOpen)
	}

	const handleInputChange = e => {
		setIndustry(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		const db = firebase.firestore();
		db.collection('industryList').add({
			name: industry
		})
		
		getIndustryList()
		setIndustry('')

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
						onChange={handleInputChange}
						value={industry}
					/>
					<Button onClick={handleSubmit}>
						<SaveIcon />
						SAVE
					</Button>
				</form>
			</Grow>
		</div>
	)
}

export default AddMolecues;