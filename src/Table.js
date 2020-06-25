import React from 'react'
import {Card} from 'antd';

const Table = props => (
  <Card size="small" title = "Items">
  <table>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(text => (
          <tr key={text.id}>
            <td>{text.name}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(text)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteitem(text.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
  </Card>
)

export default Table