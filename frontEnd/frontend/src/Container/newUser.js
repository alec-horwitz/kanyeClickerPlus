import React from 'react'

class NewUser extends React.Component{
  render(){
    return(
    <div>
      <h1>New User</h1>
      <form name="signup">
        <label>Username</label><input  type="text" name="username"/><br />
        <label>Password</label><input  type="password" name="password"/><br />
        <label>Password Confirmation</label><input  type="password" name="passwordConfirm"/>
        <button type="submit" onSubmit>Signup</button>
      </form>
    </div>
    )
  }
}

export default NewUser
