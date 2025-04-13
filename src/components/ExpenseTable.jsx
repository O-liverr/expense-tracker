export default function ExpenseTable({ expenses, searchTerm }) {
    const filteredExpenses = expenses.filter(
      (expense) =>
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }