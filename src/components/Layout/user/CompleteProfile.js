import { useContext, useRef, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import classes from './CompleteProfile.module.css';


const CompleteProfile = () => {
    const authCtx = useContext(AuthContext);
    const username = useRef();
    const imageurl = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        const enterUsername = username.current.value;
        const enterImageurl = imageurl.current.value;
        //Making a post request:
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAhbVAuWXkewbZNP1a1KknskpNGB_F8deU',
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: authCtx.token,
                    displayName: enterUsername,
                    photoUrl: enterImageurl,
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
                let error = 'update failed!...'
                if (data && data.error && data.error.message) {
                  error = data.error.message;
                }
                alert(error)
                throw new Error(error)
              })
            }
          }).then(data => {
            console.log(data);
          })/*if sucessfull connection*/
          .catch((err => {
            alert(err.message)
          }))//if connection failed
    }

    return (
        <>
            <div className={classes.profile}>
                <h3>complete your profile</h3>
                <form onSubmit={submitHandler}>
                    <label>username</label>
                    <input type='text' placeholder='User Name' required ref={username} />
                    <label>Image URL</label>
                    <input type='url' placeholder='URL' required ref={imageurl} />
                    <button type='submit'>
                    {!isLoading && <p>update profile</p>}
                    {isLoading && <p>please wait.....</p>}
                    </button>
                </form>
            </div>
        </>
    )
}

export default CompleteProfile;