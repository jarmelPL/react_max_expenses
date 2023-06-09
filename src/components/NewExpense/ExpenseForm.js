import React, {useState} from "react";
import './ExpenseForm.css'
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const [enteredDate, setEnteredDate] = useState('')
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }


    const submitHandler= (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const [formState, setFormState] = useState(false)
    const hideForm = () => {
        setFormState(false)
    }
    const showForm = () => {
        setFormState(true)
    }

    

    let formContent;

    if (formState) {
        formContent = (<form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={hideForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>)
    } else {
        formContent = (<button onClick={showForm}>Add Expense</button>)
    }

    return (
        <div>
            {formContent}
        </div>
    )
}

export default ExpenseForm