import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export default class CreateEmployee extends Component {
    constructor(props){
        super(props)
        this.state ={

          //step2
          id : this.props.match.params.id,
         firstname : '',
        lastname : '',
         emailid : ''

        }

       
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
       this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployees = this.saveEmployees.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);

    }


    //step3
    componentDidMount(){

      //step4
      if(this.state.id == -1){
        return
      }
      else{

        EmployeeService.getEmployeeById(this.state.id).then((res) =>
        {
  
            let employee = res.data;
            this.setState({firstname: employee.firstname,lastname: employee.lastname,emailid: employee.emailid});
        });

      }

     

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

   

    saveEmployees = (e) =>{
        e.preventDefault();

        let employee = {firstname: this.state.firstname , lastname: this.state.lastname , emailid: this.state.emailid};
       // console.log('employee => ' + JSON.stringify(employee));



       //step5

        if(this.state.id == -1){
          EmployeeService.postEmployee(employee).then(res =>{
            this.props.history.push('/emp')
           });
        }else{
          EmployeeService.updateEmployee(employee , this.state.id).then( res =>{
            this.props.history.push('/emp');
        } );
        }

     
    }
    cancel(){
        this.props.history.push('/emp')
    }
   

   
   

getTitle(){


    if(this.state.id == -1){
      return <h3 className='text-center'>Add Employee</h3>
    }else{
      return <h3 className='text-center'>Update Employee</h3>
    }
}



  render() {
    return (
      <div>
      
      <div className='container'>
        <div className='row'>
            <div className="card col-md-6 offset-md-3 mt-4 offset-md-3">
                {
                  this.getTitle()
                }
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
                    

                    <button className='btn btn-success' onClick={this.saveEmployees}>Save</button>
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
