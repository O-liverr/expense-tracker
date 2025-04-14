import { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "School books", amount: 45, category: "Education" },
    { id: 2, description: "Pizza", amount: 15, category: "Food" },
    { id: 3, description: "Bus fare", amount: 5, category: "Transport" }
  ]);

  const [searchText, setSearchText] = useState('');

  const filteredExpenses = expenses.filter(exp => 
    exp.description.toLowerCase().includes(searchText.toLowerCase()) || 
    exp.category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="expense-tracker">
      <h1 className="app-title">Expense Tracker</h1>
      <div className="app-content">
        <SearchBar value={searchText} onChange={setSearchText} />
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;
