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
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onAddExpense(expenseData);

    setEnteredName('');
    setEnteredAmount('');
    setEnteredDate(todayString);
  };

  return (
    <form onSubmit={submitHandler} className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Tên khoản chi</label>
        <input type="text" required value={enteredName} onChange={nameChangeHandler} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"/> 
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-1 text-sm font-medium text-gray-700">Số tiền</label>
        <input type="number" required min="0" step="1" value={enteredAmount} onChange={amountChangeHandler} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"/>
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block mb-1 text-sm font-medium text-gray-700">Ngày chi</label>
        <input type="date" required value={enteredDate} onChange={dateChangeHandler} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"/>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" >Thêm chi tiêu</button>
      </div>
    </form>
  );
};

export default ExpenseForm;