import React, { Component } from 'react'

import EmployeeService from '../service/EmployeeService';

export default class ListEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees : []   

            }
            this.addEmployee = this.addEmployee.bind(this);
            this.editEmplooyee = this.editEmplooyee.bind(this);
            this.deleteEmplooyee = this.deleteEmplooyee.bind(this);
            this.viewEmplooyee = this.viewEmplooyee.bind(this);
    }


    deleteEmplooyee(id){
      EmployeeService.deleteEmployee(id).then( res =>{
        this.setState({employee : this.state.employees.filter(employee => employee.id !== id)});

      });
    }

    viewEmplooyee(id){
      this.props.history.push(`/view/${id}`);
    }
    
    
    editEmplooyee(id){
      this.props.history.push(`/add/${id}`);

    }

    componentDidMount(){

      EmployeeService.getEmployees().then((res) => {
        this.setState({ employees: res.data});

      });
  
    }



    addEmployee(){
      this.props.history.push('/add/-1');
    }
  render() {
    return (
      <div>
       
      <h2 className='text-center'>Employye List</h2>
      <div >
        <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
      </div>
      <div className='row'>
        <table className='table table-striped table-bordered'>
<thead>
    <tr>
        <th>Employee First Name</th>
        <th>Employee Last Name</th>
        <th>Employee Email id</th>
        <th>Actions</th>
         </tr>
</thead>

<tbody>
{
    this.state.employees.map(
      employee =>
      <tr key= {employee.id}>
        <td> {employee.firstname}</td>
        <td>{employee.lastname}</td>
        <td>{employee.emailid}</td>
        <td>
          <button  onClick={ () => this.editEmplooyee(employee.id)}  className='btn btn-info'>Update</button>
          <button  style={{marginLeft: "10px"}} onClick={ () => this.deleteEmplooyee(employee.id)}  className='btn btn-danger'>Delete</button>  
          <button  style={{marginLeft: "10px"}} onClick={ () => this.viewEmplooyee(employee.id)}  className='btn btn-success'>View</button>    
           </td>
      </tr>
    )




}
</tbody>


        </table>
      </div>
      
      
      
      
      </div>
    )
  }
}
