import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class ViewEmployee extends Component {
    constructor(props){
        super(props)

            this.state = {
                id: this.props.match.params.id,
                employee: {}

            }
        }
    

        componentDidMount(){
            EmployeeService.getEmployeeById(this.state.id).then(
                res => {
                    this.setState({employee: res.data});
                }
            )
        }


  render() {
    return (
      <div>
      <br />
            <div className='card col-md-6 offset-md-3'>
                <div className= 'text-center'> View Employee Details</div>
                <div className="card-body">
                    <div className='row'>
                        <label > Employee First Name:</label>
                        <div>{ this.state.employee.firstname }</div>
                    </div>
                    <div className='row'>
                        <label > Employee last Name:</label>
                        <div>{ this.state.employee.lastname }</div>
                    </div>
                    <div className='row'>
                        <label > Employee Email Id:</label>
                        <div>{ this.state.employee.emailid }</div>
                    </div>
                </div>
            </div>

      </div>
    )
 
  }}

