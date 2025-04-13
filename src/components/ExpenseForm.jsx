import { useState } from 'react';

export default function ExpenseForm({ expenses, setExpenses }) {
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newExpense.description || !newExpense.amount || !newExpense.category) return;

    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        ...newExpense,
        amount: parseFloat(newExpense.amount),
      },
    ]);

    setNewExpense({ description: "", amount: "", category: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newExpense.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount ($)"
        value={newExpense.amount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newExpense.category}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}