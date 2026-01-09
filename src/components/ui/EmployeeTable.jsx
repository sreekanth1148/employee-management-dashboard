import React from "react";

export default function EmployeeTable({ employees = [], onEdit, onDelete }) {
  if (employees.length === 0) return <p>No employees found.</p>;

  return (
    <table border="1" cellPadding="6" width="100%">
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Gender</th>
          <th>State</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.image && <img src={e.image} width="35" />}</td>
            <td>{e.name}</td>
            <td>{e.gender}</td>
            <td>{e.state}</td>
            <td>{e.active ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={() => onEdit(e)}>Edit</button>{" "}
              <button onClick={() => onDelete(e.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
