import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const { logout } = useAuth();

  const handleAddOrUpdate = (emp) => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((e) => (e.id === emp.id ? emp : e))
      );
      setEditingEmployee(null);
    } else {
      setEmployees((prev) => [...prev, { ...emp, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const filteredEmployees = employees.filter((e) => {
    return (
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterGender ? e.gender === filterGender : true) &&
      (filterStatus ? String(e.active) === filterStatus : true)
    );
  });

  return (
    <div className="dashboard-wrapper">

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <h2>Employee Dashboard</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filterGender} onChange={(e) => setFilterGender(e.target.value)}>
          <option value="">All Genders</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>

      <EmployeeForm onAdd={handleAddOrUpdate} editingEmployee={editingEmployee} />
      <EmployeeTable
        employees={filteredEmployees}
        onEdit={setEditingEmployee}
        onDelete={handleDelete}
      />
    </div>
  );
}
