export default function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr><td colSpan="8">No employees found</td></tr>
        ) : employees.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.photo && <img src={URL.createObjectURL(e.photo)} width="40" />}</td>
            <td>{e.name}</td>
            <td>{e.gender}</td>
            <td>{e.dob}</td>
            <td>{e.state}</td>
            <td>{e.active ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={() => onEdit(e)}>Edit</button>
              <button onClick={() => onDelete(e.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
