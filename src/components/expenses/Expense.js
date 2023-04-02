import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
    const filterChangeHandler = year => {
      console.log('expense.js ' +year)
    }

    return (
      <div>
        <Card className="expenses">
          
            <ExpensesFilter showYear={filterChangeHandler}/>

            {props.items.map(expenses => 
            <ExpenseItem 
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}/>)}

        </Card>
      </div>
    )
}

export default Expense