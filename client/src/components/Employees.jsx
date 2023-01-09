import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllEmployee, deleteEmployee } from '../services/EmployeeServices';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Employees extends Component {
  state = { employees: [] }

  async componentDidMount() {
    try {
      const { data } = await getAllEmployee();
      this.setState({ employees: data });

    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    }
  }

  // Delete Employee Function
  handleDelete = async (id) => {
    const originalData = [...this.state.employees];
    try {
      const employees = originalData.filter((employee) => employee._id !== id);
      this.setState({ employees });

      const response = await deleteEmployee(id);
      toast.success(response.data);

    } catch (error) {
      toast.error(error.response.data);
      this.setState({ employees: originalData });
    }
  }

  render() {
    return (
      <div className='full_screen flex column'>
        <div className='new_employee_btn_container'>
          <Link to={'/employees/new'}>
            <Button color='primary' size='medium' variant='contained'>Add New Employee</Button>
          </Link>
        </div>
        <TableContainer className='table_container' component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Mobile</TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.state.employees.map((employee, index) => (
                  <TableRow key={employee._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align='center'>{employee.name}</TableCell>
                    <TableCell align='center'>{employee.email}</TableCell>
                    <TableCell align='center'>{employee.mobile}</TableCell>
                    <TableCell>
                      <Link to={`/employees/${employee._id}`}>
                        <Button variant='contained' size="small" color="primary">Edit</Button>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Button variant='contained' size='small' color='secondary' onClick={() => this.handleDelete(employee._id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

export default Employees;