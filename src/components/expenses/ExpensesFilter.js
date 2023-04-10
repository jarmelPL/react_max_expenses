import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [year, setYear] = useState('2022')
  const dropdownChangeHandler = (event) => {
    setYear(event.target.selectedOptions[0].innerText)
  }
  props.onChangeFilter(year)

  let yearsArray = ['2022','2021','2020','2019']

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          {yearsArray.map(item => {
            return (<option value={item}>{item}</option>)
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;