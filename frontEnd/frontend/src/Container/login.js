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
      fetch("http://localhost:3000/api/v1/users", {
        method: "post",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name:this.state.username, password:this.state.password})
      }).then(res => res.json()).then(user => {
        console.log(this.props.users[index]);
      })
    } else {
      console.log("your password or username is incorrect!");
      console.log("Try Again");
    }
  }
  render(){
    return(
    <div>
      <h1>Login</h1>
      <form name="login" onSubmit={this.handleSubmit}>
        <label>Username</label><input onChange={this.handleChange} type="text" name="username" value={this.state.username} type="text" name="username"/><br />
        <label>Password</label><input onChange={this.handleChange} type="text" name="username" value={this.state.username} type="password" name="password"/><br />
        <button type="submit">Login</button>
      </form>
    </div>
    )
  }
}

export default Login
