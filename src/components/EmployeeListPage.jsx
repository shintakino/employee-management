import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeListPage = ({ employees }) => {
  const navigate = useNavigate();

  return (
    <div className="employee-list-page">
      <h2>Employees List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/add-employee')}>Add Employee</button>
    </div>
  );
};

export default EmployeeListPage;
