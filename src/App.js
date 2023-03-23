import React from "react";

import Expense from "./components/expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  return (
    <div>
      <NewExpense />
      <Expense />
    </div>
  );
}

export default App;