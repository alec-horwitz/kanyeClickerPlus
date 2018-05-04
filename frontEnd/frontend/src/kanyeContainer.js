import React from 'react'
import NewUser from './Container/newUser.js'

const API = "https://localhost:3000/api/v1/"

const getRequest = (resource) => {
  console.log(API+resource)
  fetch(API+resource)
  .then(r => r.json())
  .then(json => this.setState({resource: json}))
}

class KanyeContainer extends React.Component{
constructor(){
super();
  this.state = {

  }
}

componentDidMount(){
  getRequest("users")
  getRequest("assets")
  getRequest("scores")
}

  render(){
    return(
      <div>
      <NewUser/>
      </div>
    )
  }
}

export default KanyeContainer
