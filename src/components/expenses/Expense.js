import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(item => item.date.toString().includes(filteredYear))
    //filtruje tablice z wydatkami po roku, nastepnie ponizej robimy funkcje map tylko na tych pofiltrowanych elementach

    return (
      <div>
        <Card className="expenses">
          
          <ul className="expenses-list">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} yearsArray={props.yearsArray}/>

            {filteredExpenses.length === 0 ? (<h2 className="expenses-list__fallback">No expenses found</h2>) : (
              filteredExpenses.map(expenses => 
                <ExpenseItem
                  key={expenses.id}
                  title={expenses.title}
                  amount={expenses.amount}
                  date={expenses.date}/>)
            )}
          </ul>

        </Card>
      </div>
    )
}

export default Expense