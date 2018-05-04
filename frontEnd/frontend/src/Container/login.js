import React from 'react'

class Login extends React.Component{
  render(){
    constructor(){
      super();
      this.state = {
        
      }
    }
    return(
    <div>
      <h1>Login</h1>
      <form name="signup">
        <label>Username</label><input  type="text" name="username"/><br />
        <label>Password</label><input  type="password" name="password"/><br />
        <button type="submit">Login</button>
      </form>
    </div>
    )
  }
}

export default Login
