import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
import { Tasks } from '/imports/api/tasks.js';
import App from '/imports/ui/App'
import Home from '/imports/ui/Home'
import SignUp from '/imports/ui/SignUp'
import DashBoard from '/imports/ui/DashBoard'
import MessageRoute from '/imports/ui/MessageRoute'

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( App, {
      content: <Home />
    })
  }
})
FlowRouter.route('/Home', {
  name: 'Home',
  action(){
    mount( App, {
      content: <Home />
    })
  }
})

FlowRouter.route('/SignUp', {
  name: 'SignUp',
  action(){
    mount( App, {
      content: <SignUp />
    })
  }
})

FlowRouter.route('/DashBoard', {
  name: 'DashBoard',
  action(){
    mount( App, {
      content: <DashBoard />
    })
  }
})
FlowRouter.route('/MessageRoute/:unm', {
  name: 'MessageRoute',
  action(){
    mount( App, {
      content: <MessageRoute />
    })
  }
})