import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(item => item.date.toString().includes(filteredYear))
    //filtruje tablice z wydatkami po roku, nastepnie ponizej robimy funkcje map tylko na tych pofiltrowanych elementach

    return (
      <div>
        <Card className="expenses">
          
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>

            {filteredExpenses.map(expenses => 
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}/>)}

        </Card>
      </div>
    )
}

export default Expense