"use client";

import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      const parsedExpenses = JSON.parse(savedExpenses);
      const expensesLocal = parsedExpenses.map(exp => ({
        ...exp,
        date: new Date(exp.date),
      }));
      setExpenses(expensesLocal);
    }
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  const totalAmount = expenses.reduce((currentTotal, expense) => {
    return currentTotal + expense.amount;
  }, 0);

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          Quản lý chi tiêu
        </h1>

        <h2 className="text-xl font-semibold text-slate-700 mb-4 text-center">
          Tổng chi tiêu: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalAmount)}
        </h2>
        
        <ExpenseForm onAddExpense={addExpenseHandler} />
        <ExpenseList items={expenses} />
      </div>
    </main>
  );
}