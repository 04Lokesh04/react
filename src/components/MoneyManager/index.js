import './index.css'

import {v4 as uuidV4} from 'uuid'

import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    selectedOption: transactionTypeOptions[0].optionId,
    titleInput: '',
    amountInput: '',
    balanceIS: 0,
    incomeIs: 0,
    expenseIS: 0,
    amountList: [],
  }

  changeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  changeOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  addAmount = event => {
    event.preventDefault()

    const {amountInput, titleInput, selectedOption} = this.state
    const newAmount = {
      id: uuidV4(),
      title: titleInput,
      amount: amountInput,
      type: selectedOption,
    }

    if (selectedOption === transactionTypeOptions[0].optionId) {
      this.setState(prevState => ({
        amountList: [...prevState.amountList, newAmount],
        balanceIS: prevState.balanceIS + parseInt(amountInput),
        incomeIs: prevState.incomeIs + parseInt(amountInput),
        titleInput: '',
        amountInput: '',
        selectedOption: transactionTypeOptions[0].optionId,
      }))
    } else {
      this.setState(prevState => ({
        amountList: [...prevState.amountList, newAmount],
        balanceIS: prevState.balanceIS - parseInt(amountInput),
        incomeIs: prevState.incomeIs,
        expenseIS: prevState.expenseIS + parseInt(amountInput),
        titleInput: '',
        amountInput: '',
        selectedOption: transactionTypeOptions[0].optionId,
      }))
    }
  }

  deleteItem = id => {
    const {amountList} = this.state
    const deletetrans = amountList.find(each => each.id === id)

    if (deletetrans) {
      const {amount, type} = deletetrans

      if (type === transactionTypeOptions[0].optionId) {
        this.setState(prevState => ({
          amountList: prevState.amountList.filter(each => each.id !== id),
          balanceIS: prevState.balanceIS - parseInt(amount),
          incomeIs: prevState.incomeIs - parseInt(amount),
          expenseIS: prevState.expenseIS,
        }))
      } else {
        this.setState(prevState => ({
          amountList: prevState.amountList.filter(each => each.id !== id),
          balanceIS: prevState.balanceIS + parseInt(amount),
          incomeIs: prevState.incomeIs,
          expenseIS: prevState.expenseIS - parseInt(amount),
        }))
      }
    }
  }

  render() {
    const {
      selectedOption,
      amountList,
      titleInput,
      amountInput,
      balanceIS,
      incomeIs,
      expenseIS,
    } = this.state
    return (
      <div className="main">
        <div className="card1">
          <h1 className="heading1">Hi, Richard</h1>
          <p className="para1" data-testid="balanceAmount">
            Welcome back to your <span className="span1">Money Manager</span>
          </p>
        </div>

        <div className="card2">
          <MoneyDetails
            balanceIS={balanceIS}
            incomeIs={incomeIs}
            expenseIS={expenseIS}
          />
        </div>

        <div className="card3">
          <div className="section1">
            <form className="formDetails" onSubmit={this.addAmount}>
              <h1 className="heading3">Add Transaction</h1>

              <label className="label" htmlFor="input1">
                TITLE
              </label>
              <input
                className="titleclass"
                id="input1"
                type="text"
                value={titleInput}
                onChange={this.changeTitle}
                placeholder="TITLE"
              />

              <label className="label" htmlFor="input2">
                AMOUNT
              </label>
              <input
                className="amountclass"
                id="input2"
                type="text"
                value={amountInput}
                onChange={this.changeAmount}
                placeholder="AMOUNT"
              />

              <label className="label" htmlFor="input3">
                TYPE
              </label>
              <select
                className="selectclass"
                id="input3"
                value={selectedOption}
                onChange={this.changeOption}
              >
                {transactionTypeOptions.map(each => (
                  <option
                    className="option"
                    key={each.optionId}
                    value={each.optionId}
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button className="button1" type="submit">
                Add
              </button>
            </form>
          </div>

          <div className="section2">
            <h1 className="heading4">History</h1>
            <div className="transactionHistory">
              <p className="historypara">Title</p>
              <p className="historypara">Amount</p>
              <p className="historypara">Type</p>
            </div>
            <ul className="history">
              {amountList.map(each => (
                <TransactionItem
                  details={each}
                  key={each.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
