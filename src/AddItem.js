import React from 'react'
import {form, input, button, Card} from 'antd';

const AddItem = props => {
	const initialFormState = { id: null, name: ''}
	const [ text, setText] = React.useState(initialFormState)
	const handleInputChange = event => {
		const { name, value } = event.target
		setText({ ...text, [name]: value })
	}

	return (
		<Card>
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!text.name) return

				props.additem(text)
				setText(initialFormState)
			}}
		>
			<label>Items</label>
			<input type="text" name="name" value={text.name} onChange={handleInputChange} />
			<button>Add items</button>
		</form>
		</Card>
	)
}

export default AddItem