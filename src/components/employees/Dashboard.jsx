import React, { useState } from "react";
import EmployeeForm from "../ui/EmployeeForm";
import EmployeeTable from "../ui/EmployeeTable";

export default function Dashboard({ onLogout }) {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);

  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const addEmployee = (emp) => {
    setEmployees((prev) => [...prev, emp]);
  };

  const updateEmployee = (emp) => {
    setEmployees((prev) => prev.map((e) => (e.id === emp.id ? emp : e)));
    setEditing(null);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Delete employee?")) {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const filteredEmployees = employees.filter((e) => {
    return (
      (e.name || "").toLowerCase().includes(search.toLowerCase()) &&
      (!genderFilter || e.gender === genderFilter) &&
      (!stateFilter || e.state === stateFilter) &&
      (statusFilter === ""
        ? true
        : statusFilter === "active"
        ? e.active === true
        : e.active === false)
    );
  });

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <h2 style={{ margin: 0 }}>Employee Dashboard</h2>

        <div>
          <button onClick={() => window.print()} style={{ marginRight: 8 }}>
            Print
          </button>
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>

      {/* 🔍 SEARCH & FILTERS */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
          <option value="">All States</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Telangana">Telangana</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <EmployeeForm
        onAdd={addEmployee}
        editEmployee={editing}
        onUpdate={updateEmployee}
      />

      <EmployeeTable
        employees={filteredEmployees}
        onEdit={(e) => setEditing(e)}
        onDelete={deleteEmployee}
      />
    </div>
  );
}
