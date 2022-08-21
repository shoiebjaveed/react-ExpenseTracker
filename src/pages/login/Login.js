import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const email = useRef();
    const password = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        
    }

  return (
  <>
   <div className={classes.login}>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type='email' placeholder='Email' required ref={email}/>
        <label>Password</label>
        <input type='password' placeholder='password' required ref={password}/>
        <button type='submit'>submit</button>
      </form>
      <p>Don't Have an account? 
        <Link to='/signup'> Signup</Link>
      </p>
    </div>
  </>
  )
}

export default Login;