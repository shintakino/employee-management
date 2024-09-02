import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import EmployeeListPage from './components/EmployeeListPage';
import AddEmployeePage from './components/AddEmployeePage';

function App() {
  const [employees, setEmployees] = useState([
    { id: '1', firstName: 'John', lastName: 'Doe', position: 'Manager' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', position: 'Developer' },
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
