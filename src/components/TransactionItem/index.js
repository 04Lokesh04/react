// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteItem} = props
  const {id, title, type, amount} = details
  const ondelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list">
      <p className="para">{title}</p>
      <p className="para">{amount}</p>
      <p className="para">{type}</p>
      <button
        className="button"
        type="button"
        onClick={ondelete}
        data-testid="delete"
      >
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
