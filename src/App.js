import React,{useEffect,useState} from 'react'
import './App.css';

function App() {

  
  return ( 
  <>
  <title>Login</title>
  <link rel="stylesheet" href="App.css"/>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
  />
  <div className="login-box">
    <h1>Login</h1>
    <form
      className="login-form"
      action="<?php echo $_SERVER['PHP_SELF'] ?>"
      method="POST"
    >
      <label>Email</label>
      <input type="email" placeholder="Email" name="email" required="" />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        required=""
      />
      <button type="submit" className="regi" name="login" id="login">
        LOGIN
      </button>
    </form>
  </div>
  <p className="para-2">
    Don't have an account? <a href="register.php">Sign Up Here</a>
  </p>
</>

  )
}
export default App;