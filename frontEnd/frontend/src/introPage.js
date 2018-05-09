import React from 'react'
import NewUser from './Container/newUser.js'
import Login from './Container/login.js'
import KanyeContainer from './Container/kanyeContainer'
// import {Link, Route} from 'react-router-dom'

const API = "http://localhost:3000/api/v1/"

const getRequest = (resource,component) => {
  fetch(API+resource)
  .then(r => r.json())
  .then(json => component.setState({[resource]: json}))
}

class IntroPage extends React.Component{
  constructor(){
    super();
      this.state = {
      users : [],
      assets : [],
      scores : [],
      activeUser: null
    }
  }

  componentDidMount(){
    getRequest("users",this)
    // getRequest("assets",this)
    // getRequest("scores",this)
  }

  setActiveUser = user => {
    fetch(API+"users")
    .then(r => r.json())
    .then(json => this.setState({
      users: json,
      activeUser: user
    }))
  }

  render(){
    // <Route path="/register" render={ (renderProps) =>
    // } />
    // <Route path="/login" render={ (renderProps) =>
    // } />
    // <Link to="/register">Register</Link>
    // <Link to="/login">Login</Link>
    return(
      <div>
          <div>
            {this.state.activeUser ? <KanyeContainer /> :
            [<Login setActiveUser={this.setActiveUser} users={this.state.users} />,
            <NewUser setActiveUser={this.setActiveUser} users={this.state.users} />]}
          </div>
      </div>
    )
  }
}

export default IntroPage
