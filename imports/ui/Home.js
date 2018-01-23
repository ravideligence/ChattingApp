import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FlowRouter } from 'meteor/kadira:flow-router'
export default class Home extends Component{
constructor()
{
  super();
}
		
checkLogin(event) {
    event.preventDefault();
    let userid=event.target.txtuname.value;
 
  let pwd=event.target.txtpwd.value;
    alert(userid);
    let loginstatus=1;
  Meteor.loginWithPassword(userid, pwd, function(error) {
    let curid=Meteor.userId();
    //alert(curid);
     Meteor.users.update({_id: curid }, {$set: {"profile.loginstatus": loginstatus}});
      if (error) {
        alert("There was an error:" + error.reason);
      } else {
        alert("Thanks For Using My App" );
        //FlowRouter.go('/DashBoard');
        FlowRouter.go('/MessageRoute/'+userid);
      }
    });
  
  }

    
 		

		 

		 

   render() {
      return (
         <div className="container">
         <header>
            <h1>Welcome In My ChatBox</h1>
           </header>
            <a color="link" href="/SignUp">SignUp</a>
            <Form onSubmit={this.checkLogin.bind(this)} >
            <h2>Login Form</h2>
        
         <FormGroup>
        
          <Label for="lbluname">User Name</Label>
          <Input type="text"   name="txtuname" placeholder="Enter Your Login User Id" />
        </FormGroup>
        <FormGroup>
          <Label for="lblpwd">Password</Label>
          <Input type="password"  name="txtpwd"  placeholder="Enter Your Login password" />
        </FormGroup>
       
        
        <Input  type="submit"  name="btncreate" className="btn btn-success" value="Login"/>
      </Form>


         </div>
      );
   }
}
