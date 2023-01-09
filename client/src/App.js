import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Employees from './components/Employees';
import EmployeeForm from './components/EmployeeForm';
import NotFound from './components/NotFound';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        <Route path='/employees/:id' element={<EmployeeForm />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='not-found' element={<NotFound />} />
        <Route path='/' element={<Navigate replace to="/employees" />} />

        {/* <Navigate to="/not-found" /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
