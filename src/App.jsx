import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import EmployeeListPage from './components/EmployeeListPage';
import AddEmployeePage from './components/AddEmployeePage';

function App() {
  const [employees, setEmployees] = useState([
    { id: '1', firstName: 'Juan', lastName: 'Dela Cruz', position: 'Manager' },
    { id: '2', firstName: 'Maria', lastName: 'Santos', position: 'Developer' },
    { id: '3', firstName: 'Jose', lastName: 'Rizal', position: 'Designer' },
    { id: '4', firstName: 'Ana', lastName: 'Mendoza', position: 'Accountant' },
    { id: '5', firstName: 'Pedro', lastName: 'Alcantara', position: 'Sales' }
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/employees" element={<EmployeeListPage employees={employees} />} />
        <Route path="/add-employee" element={<AddEmployeePage employees={employees} addEmployee={addEmployee} />} />
      </Routes>
    </Router>
  );
}

export default App;
