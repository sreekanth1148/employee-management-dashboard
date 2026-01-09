import { useEffect, useState } from "react";

export default function EmployeeForm({ onAdd, editingEmployee }) {
  const [form, setForm] = useState({
    id: null,
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    photo: null,
  });

  useEffect(() => {
    if (editingEmployee) setForm(editingEmployee);
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ id: null, name: "", gender: "", dob: "", state: "", active: true, photo: null });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
      <select name="gender" value={form.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
      <input name="state" placeholder="State" value={form.state} onChange={handleChange} required />
      <label>
        <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
        Active
      </label>
      <input type="file" name="photo" onChange={handleChange} />
      <button type="submit">{editingEmployee ? "Update" : "Add"}</button>
    </form>
  );
}
