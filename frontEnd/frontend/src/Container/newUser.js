import React from 'react'

class NewUser extends React.Component{
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      passwordConfirm: ""
    }
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    let usernames = this.props.users.map(user => {return user.name})
    let index = usernames.indexOf(this.state.username)
    if ((this.state.password === this.state.passwordConfirm) && (index < 0)) {
      fetch("http://localhost:3000/api/v1/users", {
        method: "post",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name:this.state.username, password:this.state.password})
      }).then(res => res.json()).then(user => {
        console.log(this.props.users[index]);
      })
    } else if (index > -1) {
      console.log("Username already taken!");
      console.log("Try Again");
    }{
      console.log("your password and password confirmation do not match!");
      console.log("Try Again");
    }
  }
  render(){
    return(
      <div>
        <h1>New User</h1>
        <form name="signup" onSubmit={this.handleSubmit}>
          <label>Username</label><input onChange={this.handleChange} type="text" name="username" value={this.state.username} /><br />
          <label>Password</label><input onChange={this.handleChange} type="password" name="password" value={this.state.password} /><br />
          <label>Password Confirmation</label><input onChange={this.handleChange} type="password" name="passwordConfirm" value={this.state.passwordConfirm} />
          <button type="submit" >Signup</button>
        </form>
      </div>
    )
  }
}

export default NewUser
