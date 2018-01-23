import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Tasks } from '../api/tasks.js';

//import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// App component - represents the whole app
//import 'bootstrap/dist/css/bootstrap.css';
//
 class App extends Component {
   render() {
      return (
       
            <div className="container">

               {this.props.content}
            </div>
         
      );
   }
}
export default App;