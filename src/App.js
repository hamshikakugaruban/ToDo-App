import React,{Fragment} from 'react'
import AddItem from './AddItem'
import EditItem from './EditItem'
import Table from './Table'

const App = () => {
	const data = [
	]

	const initialFormState = { id: null, item: ''}
	const [ items, setItems ] = React.useState(data)
	const [ currentItem, setCurrentItem ] = React.useState(initialFormState)
	const [ editing, setEditing ] = React.useState(false)

	const additem = text => {
		text.id = items.length + 1
		setItems([ ...items, text ])
	}

	const deleteitem = id => {
		setEditing(false)
		setItems(items.filter(text => text.id !== id))
	}

	const updateitem = (id, updateditem) => {
		setEditing(false)
		setItems(items.map(text => (text.id === id ? updateditem : text)))
	}

	const editRow = text => {
		setEditing(true)
		setCurrentItem({ id: text.id, name: text.name })
	}

	return (
		<div className="container">
			<h1>ToDo - App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Item</h2>
							<EditItem
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateitem={updateitem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddItem additem={additem} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<Table items={items} editRow={editRow} deleteitem={deleteitem} />
				</div>
			</div>
		</div>
	)
}

export default App