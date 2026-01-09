export default function SummaryCards({ employees }) {
  const total = employees.length;
  const active = employees.filter(e => e.active).length;
  const inactive = total - active;

  return (
    <div style={{ display: "flex", gap: 20, marginBottom: 15 }}>
      <Card label="Total Employees" value={total} />
      <Card label="Active" value={active} />
      <Card label="Inactive" value={inactive} />
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div style={{
      padding: 15,
      background: "#f1f5f9",
      borderRadius: 8,
      width: 160,
      textAlign: "center"
    }}>
      <div style={{ fontSize: 12 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: "bold" }}>{value}</div>
    </div>
  );
}
