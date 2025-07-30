"use client";
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ExpenseForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const todayString = new Date().toISOString().slice(0, 10);
  const [enteredDate, setEnteredDate] = useState(todayString);
  

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

    if (enteredName.trim() === '' || enteredAmount.trim() === '' || enteredDate.trim() === '') {
    	alert('Vui lòng điền đầy đủ thông tin!');
    	return;
    }

    const expenseData = {
      id: nanoid(),
      name: enteredName,
      amount: enteredAmount,
      date: new Date(enteredDate),
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
        <input type="text" required value={enteredName} onChange={nameChangeHandler}/> 
      </div>
      <div>
        <label>Số tiền</label>
        <input type="number" required min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
      </div>
      <div>
        <label>Ngày chi</label>
        <input type="date" required value={enteredDate} onChange={dateChangeHandler}/>
      </div>
      <div>
        <button type="submit" >Thêm chi tiêu</button>
      </div>
    </form>
  );
};

export default ExpenseForm;