export default function SummaryCards({ employees = [] }) {
  const total = employees.length;
  const active = employees.filter(e => e.active).length;
  const inactive = employees.filter(e => !e.active).length;

  return (
    <div className="summary">
      <div className="card">Total: {total}</div>
      <div className="card">Active: {active}</div>
      <div className="card">Inactive: {inactive}</div>
    </div>
  );
}
