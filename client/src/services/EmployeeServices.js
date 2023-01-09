import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/employees';

// Create Employee
export const createEmployee = (data) => {
    return axios.post(apiUrl);
};

// Get All Employee
export const getAllEmployee = () => {
    return axios.get(apiUrl);
};

// Get Employee By ID
export const getEmployeeById = (id) => {
    return axios.get(`${apiUrl}/${id}`);
};

// Update Employee By ID
export const updateEmployee = (id, data) => {
    // Link and data
    return axios.put(`${apiUrl}/${id}`, data);
};

// Delete Employee By ID
export const deleteEmployee = (id) => {
    return axios.delete(`${apiUrl}/${id}`);
};
