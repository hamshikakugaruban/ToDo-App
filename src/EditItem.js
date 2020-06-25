import React from 'react'
import { form, input, button} from 'antd';

const EditItem = props => {
  const [ text, setText] = React.useState(props.currentItem)
  React.useEffect(
    () => {
      setText(props.currentItem)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setText({ ...text, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateitem(text.id, text)
      }}
    >
      <label>update</label>
      <input type="text" name="name" value={text.name} onChange={handleInputChange} />
      <button>Update item</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
  )
}

export default EditItem