// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceIS, incomeIs, expenseIS} = props
  return (
    <>
      <div className="balanceCard">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="heading2">Your Balance</p>
          <p className="para2" data-testid="balanceAmount">
            Rs {balanceIS}
          </p>
        </div>
      </div>

      <div className="incomeCard">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="heading2">Your Income</p>
          <p className="para2" data-testid="incomeAmount">
            Rs {incomeIs}
          </p>
        </div>
      </div>

      <div className="expensesCard">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="heading2">Your Expenses</p>
          <p className="para2" data-testid="expensesAmount">
            Rs {expenseIS}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
