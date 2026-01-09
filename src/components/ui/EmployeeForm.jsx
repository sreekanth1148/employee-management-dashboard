import React, { useState, useEffect } from "react";

export default function EmployeeForm({ onAdd, editEmployee, onUpdate }) {
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [state, setState] = useState("Andhra Pradesh");
  const [active, setActive] = useState(true);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (editEmployee) {
      setEmpId(editEmployee.id);
      setName(editEmployee.name);
      setGender(editEmployee.gender);
      setState(editEmployee.state);
      setActive(editEmployee.active);
      setPreview(editEmployee.image || "");
    }
  }, [editEmployee]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!empId || !name || !state) {
      return alert("Employee ID, Name, and State are required");
    }

    const emp = {
      id: empId,
      name,
      gender,
      state,
      active,
      image: preview,
    };

    editEmployee ? onUpdate(emp) : onAdd(emp);

    setEmpId("");
    setName("");
    setGender("Male");
    setState("Andhra Pradesh");
    setActive(true);
    setPreview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center" }}
    >
      <input
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
      />

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option>Andhra Pradesh</option>
        <option>Telangana</option>
        <option>Karnataka</option>
        <option>Tamil Nadu</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />
        Active
      </label>

      <input type="file" accept="image/*" onChange={handleImage} />

      {preview && <img src={preview} width="40" alt="preview" />}

      <button type="submit">{editEmployee ? "Update" : "Add"}</button>
    </form>
  );
}
