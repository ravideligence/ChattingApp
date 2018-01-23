import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Tasks } from '../api/tasks.js';
 class DashBoard extends Component {
constructor(props)	
{
super(props);
this.state={a:10,usernm:''};
let uid=Accounts.userId();

}
chkLogut()
{// console.log(Meteor.users.find().fetch());
//return Meteor.user().username;
//alert("hello");
let loginstatus=0;
let curid=Meteor.userId();
    //alert(curid);
     Meteor.users.update({_id: curid }, {$set: {"profile.loginstatus": loginstatus}});
Meteor.logout();
FlowRouter.go('Home');
}
messagebox(event)
{

alert("hello"+event.target.id);
Session.set("currentnm")
}
 
   render() {
    let unm='';
    if(Meteor.user())
      unm=Meteor.user().username;
   
      return (
     
         <div className="container">
         <header>
            <h3>DashBoard</h3>
            { this.props.currentUser ?  'Welcome '+ unm  : 'Guest' }
             
          </header>
          
          <Button name="btn1" onClick={this.chkLogut.bind(this)} >Logout </Button>
        
            
<ul className="mybar">
{this.props.alluser.map((text,index)=>{

if(text.profile.loginstatus==0)

  return <li> <a  color="link" id={text._id} href={'/MessageRoute/'+text._id}>{text.username}</a></li>

else

return <li> <a  color="link" id={text._id} href={'/MessageRoute/'+text._id}>{text.username}<div className="onlineicon"></div></a></li>


})}
</ul>


         </div>
        
      );
   }
}


export default withTracker(() => {
  Meteor.subscribe('tasks');
  return {
    alluser: Meteor.users.find({ _id: { $ne: Meteor.userId() } }).fetch(),
      currentUser: Meteor.user(),
  };
  
})(DashBoard);
