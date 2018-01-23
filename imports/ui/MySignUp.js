 import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';


 class MySignUp extends Component
{

constructor(props,context)
  {
    super(props,context);
  }
  render() {
    return (
     <div>
    
            
            <a color="link" href="/Home">Home</a>
            <Form onSubmit={this.props.onSubmit}>
            <h2>Sign Up Form</h2>
            
            <FormGroup>
        
          <Label for="lblfname">First Name</Label>
          <Input type="text"  name="txtfname"  placeholder="Enter your First Name" />
        </FormGroup>
        <FormGroup>
          <Label for="lbllname">Last Name</Label>
          <Input type="text" name="txtlname"  placeholder="Enter Your Last Name" />
        </FormGroup>
         <FormGroup>
        
          <Label for="lbluname">User Name</Label>
          <Input type="text" name="txtuname"  placeholder="Enter Your Login User Id" />
        </FormGroup>
        <FormGroup>
          <Label for="lblpwd">Password</Label>
          <Input type="password" name="txtpwd"  placeholder="Enter Your Login password" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">City</Label>
          <Input type="select" name="txtcity" >
            <option>Delhi</option>
            <option>Patna</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Banglore</option>
          </Input>
        </FormGroup>
        <input type="submit"  name="btn1" value="create" />
        
        
      </Form>
            </div>

    );
  }
}
 
export default MySignUp