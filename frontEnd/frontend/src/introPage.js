import React from 'react'
import NewUser from './Container/newUser.js'
import KanyeContainer from './Container/kanyeContainer'

const API = "http://localhost:3000/api/v1/"

const getRequest = (resource,component) => {
  fetch(API+resource)
  .then(r => r.json())
  .then(json => component.setState({resource: json}))
}

class IntroPage extends React.Component{
constructor(){
super();
  this.state = {
  users : [],
  assets : [],
  scores : []
  }
}

componentDidMount(){
  getRequest("users",this)
  getRequest("assets",this)
  getRequest("scores",this)
}

  render(){
    console.log(this.state.users);
    return(
      <div>
      <NewUser users={this.state.users}/>
      </div>
    )
  }
}

export default IntroPage
