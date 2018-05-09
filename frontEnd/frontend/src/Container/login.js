import React from 'react'

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    let usernames = this.props.users.map(user => {return user.name})
    let index = usernames.indexOf(this.state.username)
    if (index > -1) {
      this.props.setActiveUser(this.props.users[index])
    } else {
      console.log("your password or username is incorrect!");
      console.log("Try Again");
    }
  }

  render(){
    // <label>Password</label><input onChange={this.handleChange} type="text" name="username" value={this.state.username} type="password" name="password"/><br />
    return(
    <div>
      <h1>Login</h1>
      <form name="login" onSubmit={this.handleSubmit}>
        <label>Username</label><input onChange={this.handleChange} type="text" name="username" value={this.state.username} type="text" name="username"/><br />
        <button type="submit">Login</button>
      </form>
    </div>
    )
  }
}

export default Login
