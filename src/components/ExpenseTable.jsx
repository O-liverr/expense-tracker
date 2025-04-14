import './ExpenseTable.css';

export default function ExpenseTable({ expenses }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses to show</p>;
  }

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(exp => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>${exp.amount.toFixed(2)}</td>
            <td>{exp.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}