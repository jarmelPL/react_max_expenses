import React, {useState} from "react";

import Expense from "./components/expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  // expense to dane expenseData (czyli to co zostało wpisane do forumlarza zadania + ID tej czynności)
  // prevExpenses to zmienna expenses przy useState, czyli za pierwszym razem jest to tablica DUMMY_EXPENSES, 
  //jesli dodamy jakas czynność to wtedy będzie to tablica DUMMY_EXPENSES + ta czynność, pozniej kolejna i kolejna


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
}

//jesli w NewExpense kliknie sie przycisk submit, wtedy zostanie stworzony obiekt z nowym expense, zmieni sie stan wiec aplikacja sie przeladuje
//w NewExpense zostanie przekazany obiekt z nowym expense do funkcji addExpenseHandler z App.js
//addExpenseHandler zmieni stan i stworzy nową tablicę obiektów expenses, według ktorej zostanie stworzona nowa lista wydatków (stara + jeden nowy wydatek) czyli komponenty ExpenseItem wewnątrz komponentu Expense

export default App;