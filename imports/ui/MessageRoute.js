import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Tasks } from '../api/tasks.js';
class MessageRoute extends Component {
	constructor(props)
	{
		super(props);
		this.state={ arr: [{
		fromuser:'',
		touser:'',
		textmsg:'',
		createdAt:'',
		curunm:''

			
			
			}]};
	}
chkLogut(event)
{// console.log(Meteor.users.find().fetch());
//return Meteor.user().username;
//alert("hello");
event.preventDefault();
let loginstatus=0;
let curid=Meteor.userId();
    //alert(curid);
     Meteor.users.update({_id: curid }, {$set: {"profile.loginstatus": loginstatus}});
Meteor.logout();
FlowRouter.go('Home');
}
	showMsg(evet)
	{
		event.preventDefault();
		//alert("hello");
		let curid=FlowRouter.getParam('unm');
		//alert(curid);
		let fromusr=Meteor.userId();
		//alert(fromusr);
		//{ $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] }

		let mydata = Tasks.find({ $or: [ { tousr:curid,fromusr:fromusr }, { tousr:fromusr,fromusr:curid } ] }).fetch(); // get data from db
		//let mydata = Tasks.find({tousr: curid,fromusr:fromusr }).fetch(); // get data from db
		let len=mydata.length;
		//alert(len);
		let i=0;
		if(len==0)
		{
		location.reload();	
		}
		 this.state.arr.splice(0, len);
         this.setState(this.state.arr);

		
		//let i=0;
		for(i=0;i<len;i++)
		{
			dt=mydata[i].createdAt;
			let d=dt.getDate();
			let m=dt.getUTCMonth()+1;
			let y=dt.getUTCFullYear();
			dt=d+"/"+m+"/"+y;
 //var d = new Date(dt);
 //dt = new Date(dt);
   // var hr = d.getMinutes();
   //var mnt = d.getHours();
   // var tm=hr+":"+mnt;
    //console.log(dt," <=====> ",new Date(dt));

		this.state.arr.push({
                          "fromusr" : mydata[i].fromusr,
                          "tousr":mydata[i].tousr,
                          "textmsg":mydata[i].textmsg,
                          "createdAt":dt,
                          "curunm":mydata[i].curunm
                          
                                  });
										}
		this.setState({arr: this.state.arr});
		

		  //alert("arr length"+this.state.arr.length);
		  //location.reload();

	}
	handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    let textmsg = ReactDOM.findDOMNode(this.refs.txtmsg).value.trim();
let tousr=FlowRouter.getParam('unm');
let fromusr=Meteor.userId();
//alert(tousr);
//alert(fromusr);
   // alert(textmsg);	
     curunm=Meteor.user().username
    Tasks.insert({fromusr,tousr,textmsg,curunm,
                  createdAt: new Date(), // current time
                 });

 
    
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.txtmsg).value = '';
    //location.reload();


    let curid=FlowRouter.getParam('unm');
		//alert(curid);
		 fromusr=unm=Meteor.userId();
let mydata = Tasks.find({ $or: [ { tousr:curid,fromusr:fromusr }, { tousr:fromusr,fromusr:curid } ] }).fetch(); // get data from db
		//let mydata = Tasks.find({tousr: curid,fromusr:fromusr }).fetch(); // get data from db
		let len=mydata.length;
		//alert(len);
		let i=0;
		if(len==0)
		{
		location.reload();	
		}
		 this.state.arr.splice(0, len);
         this.setState(this.state.arr);

		
		//let i=0;
		for(i=0;i<len;i++)
		{
			dt=mydata[i].createdAt;
			let d=dt.getDate();
			let m=dt.getUTCMonth()+1;
			let y=dt.getUTCFullYear();
			dt=d+"/"+m+"/"+y;
 //dt = new Date(dt);
    //var hr = dt.getMinutes();
    //var mnt = dt.getHours();
    //var tm=hr+":"+mnt;
    //console.log(tm);

		this.state.arr.push({
                          "fromusr" : mydata[i].fromusr,
                          "tousr":mydata[i].tousr,
                          "textmsg":mydata[i].textmsg,
                          "createdAt":dt,
                          "curunm":mydata[i].curunm
                          
                                  });
										}
		this.setState({arr: this.state.arr});
		

		  //alert("arr length"+this.state.arr.length);
		
  }

   render() {
   	let curunm='';
    if(Meteor.user())
      curunm=Meteor.user().username;
      return (
         <div>
       

                 <ul className="mybar1">
{this.props.alluser.map((text,index)=>{

if(text.profile.loginstatus==0)

  return <li> <a  color="link" id={text._id} href={'/MessageRoute/'+text._id} onClick={this.showMsg.bind(this)}>{text.username}</a></li>

else

return <li> <a  color="link" id={text._id} href={'/MessageRoute/'+text._id} onClick={this.showMsg.bind(this)}>{text.username}<div className="onlineicon"></div></a></li>


})}
</ul>

			<div class="menu">
            <div class="back"><i class="fa fa-chevron-left"></i> <img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
            <div class="name">{curunm}</div>
            <div class="last"><a name="btn1" onClick={this.chkLogut.bind(this)} >Logout </a></div>

        </div>
   

    <ol class="chat">

 {this.state.arr.map((text,index)=>{

 	if(Meteor.userId()==text.fromusr){
  return  <li class="other">
        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
      <div class="msg">

  
        <p>{text.curunm}</p>
        <p>{text.textmsg} <emoji class="pizza"/></p>
        <time>{text.createdAt}</time>
      </div>
    </li>
}
else
{

  return <li class="self">
        <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
      <div class="msg">
        <p>{text.curunm}</p>
        <p>{text.textmsg} <emoji class="books"/></p>
        
        <time>{text.createdAt}</time>
      </div>
    </li>

}
})}



    
    
   
    
    
    
    
    </ol>
    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
    <input class="textarea" type="text" name="txtmsg" ref="txtmsg" placeholder="Type here!"
   onSubmit={this.handleSubmit.bind(this)} />
   
    <div class="emojis"></div>
    </form>


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
  
})(MessageRoute);