import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Signup.module.css'

const Signup = () => {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enterConfirmPassword = confirmPassword.current.value;
    if (enteredPassword !== enterConfirmPassword) {
      alert('password not matching please enter correct password')
    } else {
      //After validation 
      setIsLoading(true);
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhbVAuWXkewbZNP1a1KknskpNGB_F8deU',
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
          history('/login');
          // ...
        } else {
          return res.json().then(data => {
            let error = 'Signup failed!...'
            if (data && data.error && data.error.message) {
              error = data.error.message;
            }
            alert(error)
            console.log(data)
          })
        }
      });
    }
  }

  return (
    <>
      <div className={classes.signup}>
        <h2>signup</h2>
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <input type='email' placeholder='Email' required ref={email} />
          <label>Password</label>
          <input type='password' placeholder='password' required ref={password} />
          <label>Confirm Password</label>
          <input type='password' placeholder='confirm password' required ref={confirmPassword} />
          <button type='submit'>{!isLoading && <p>submit</p>}
            {isLoading && <p>please wait signing up.....</p>}
          </button>
        </form>
        <div className={classes.condition}>
          <p>Already Have an account?
            <Link to='/login'> Login</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup