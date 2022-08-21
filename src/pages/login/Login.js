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

        setIsLoading(true)
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhbVAuWXkewbZNP1a1KknskpNGB_F8deU',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => {
        setIsLoading(false)
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(data => {
            let error = 'Login failed!...'
            if (data && data.error && data.error.message) {
              error = data.error.message;
            }
            alert(error)
            throw new Error(error)
          })
        }
      }).then(data => {
        console.log(data)
      })/*if sucessfull connection*/
      .catch((err => {
        alert(err.message)
      }))//if connection failed
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
        <button type='submit'>
            {!isLoading && <p>submit</p>}
            {isLoading && <p>please wait.....</p>}
            </button>
      </form>
      <div className={classes.condition}>
      <p>Don't Have an account? 
        <Link to='/signup'>Signup</Link>
      </p>
      </div>
    </div>
  </>
  )
}

export default Login;