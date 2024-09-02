import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeePage = ({ employees, addEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateName = (name) => /^[a-zA-Z]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !position || !id) {
      setError('All fields are required.');
      return;
    }

    if (!validateName(firstName) || !validateName(lastName)) {
      setError('First name and last name should contain only letters.');
      return;
    }

    if (employees.some(employee => employee.id === id)) {
      setError('Employee ID must be unique.');
      return;
    }

    addEmployee({ id, firstName, lastName, position });
    navigate('/employees');
  };

  return (
    <div className="add-employee-page">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeePage;
