import { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';

function App() {
  const initialExpenses = [
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    { id: 2, description: "Movie", amount: 15, category: "Entertainment" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      <ExpenseTable expenses={expenses} searchTerm={searchTerm} />
    </div>
  );
}

export default App;