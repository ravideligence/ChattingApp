import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MySignUp from './MySignUp';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class SignUp extends Component {
  constructor(props,context)
  {
  	super(props,context);

  }
 handleSubmit(event)
 {
 	let fname=event.target.txtfname.value;
 	let lname=event.target.txtlname.value;
 	let userid=event.target.txtuname.value;
 	let name=fname+ ' '+lname;
 	let pwd=event.target.txtpwd.value;
 	let city=event.target.txtcity.value;
  let loginstatus=0;
 	if(fname=='' || lname==''|| userid==''|| pwd=='')
 	{
 		alert("Some Fields are Blank.")
 	}
 	else
 	{
 	Accounts.createUser(

 		{
   // Meteor.userId()

  username: userid, // Unique name
  createdAt: new Date('Wed Aug 21 2013 15:16:52 GMT-0700 (PDT)'),
  password: pwd,
    profile: {
    // The profile is writable by the user by default.
    name: name,
    city: city,
    loginstatus:loginstatus,
  }});
 	alert("User Created Successfully");
 	FlowRouter.go('/Home');
 }


 }
	

   render() {
      return (
         <div>
         

           <header>
            <h1>Welcome In My ChatBox</h1>
           </header>
          
          <MySignUp 
          	onSubmit={this.handleSubmit.bind(this)}
           />
            
        
           

         </div>
      );
   }
}
