"use client";
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredName, setName] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');
  

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: enteredName,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onAddExpense(expenseData);

    setEnteredName('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Tên khoản chi</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler}/> 
      </div>
      <div>
        <label>Số tiền</label>
        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
      </div>
      <div>
        <label>Ngày chi</label>
        <input type="date" min="2025-07-30" max="2028-12-31" value={enteredDate} onChange={dateChangeHandler}/>
      </div>
      <div>
        <button type="submit" >Thêm chi tiêu</button>
      </div>
    </form>
  );
};

export default ExpenseForm;