"use client";

import { useState, useEffect } from 'react';

export default function Page() {
	const [expenses, setExpenses] = useState([]);

	useEffect(()=>{
		const savedExpenses = localStorage.getItem('expenses')

		if (savedExpenses) {
			setExpenses(JSON.parse(savedExpenses))
		}
	}, []);

	useEffect(()=>{
		localStorage.setItem('expenses', JSON.stringify(expenses))
	}, [expenses]);
	
	const addExpensesHandler = (newExpense) => {
		setExpenses(prev => [newExpenses, ...prev]);
	};

	return (
		<div>
			<ExpenseForm onAddExpense = {addExpenseHandler}/>
			<ExpenseList items={expenses}/>
		</div>
	)
}