import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ expenses, setExpenses }) {
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newExpense.description || !newExpense.amount || !newExpense.category) return;

    setExpenses(prevExpenses => [
      ...prevExpenses,
      {
        id: Date.now(),
        description: newExpense.description,
        amount: Number(newExpense.amount),
        category: newExpense.category
      }
    ]);

    setNewExpense({
      description: '',
      amount: '',
      category: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({
      ...newExpense,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newExpense.description}
        onChange={handleChange}
        className="form-input"
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={newExpense.amount}
        onChange={handleChange}
        className="form-input"
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newExpense.category}
        onChange={handleChange}
        className="form-input"
        required
      />
      <button type="submit" className="submit-btn">
        Add Expense
      </button>
    </form>
  );
}