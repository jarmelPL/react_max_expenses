import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [year, setYear] = useState('2023')
  const dropdownChangeHandler = (event) => {
    setYear(event.target.selectedOptions[0].innerText)
  }
  props.onChangeFilter(year)

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          {props.yearsArray.map(item => {
            return (<option value={item}>{item}</option>)
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;