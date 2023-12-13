import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export default class  extends Component {

    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            firstname : '',
            lastname : '',
             emailid : ''
    

        }
    
     
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
       this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployees = this.updateEmployees.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstname: event.target.value});
    }
     changeLastNameHandler = (event) => {
        this.setState({lastname: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({emailid: event.target.value});
    }


    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) =>
        {

            let employee = res.data;
            this.setState({firstname: employee.firstname,lastname: employee.lastname,emailid: employee.emailid});
        })

    }
    updateEmployees = (e) =>{
        e.preventDefault();

        let employee = {firstname: this.state.firstname , lastname: this.state.lastname , emailid: this.state.emailid};
       //console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee , this.state.id).then( res =>{
            this.props.history.push('/emp');
        } )
    
    }
    cancel(){
        this.props.history.push('/emp')
    }
   

  render() {
    return (
      <div>
      
      <div className='container'>
        <div className='row'>
            <div className="card col-md-6 offset-md-3 mt-4 offset-md-3">
                <h3 className='text-center'> Update Employees</h3>
                <div className='card-body'>
                    <form >
                    <div className='form-group'>
                    <label > First Name</label>
                    <input placeholder='First Name'  name='firstname' className='form-control'
                    value={this.state.firstname}  onChange={this.changeFirstNameHandler} />

                    </div>
                    <div className='form-group'>
                <label > Last Name</label>
                    <input placeholder='last-name'  name='lastname' className='form-control'
                    value={this.state.lastname}  onChange={this.changeLastNameHandler} />
                </div>


            <div className='form-group'>
                <label > Emailid</label>
                    <input placeholder='emailid'  name='emailid' className='form-control'
                    value={this.state.emailid}  onChange={this.changeEmailHandler} />
                            </div>
                    

                    <button className='btn btn-success' onClick={this.updateEmployees}>Save</button>
                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>


                    </form>
                </div>
            </div>
        </div>
      </div>
    
      
      </div>
    )
  }
}

