import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import classes from './Profile.module.css';


const Profile = () => {
    const authCtx = useContext(AuthContext);


    fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAhbVAuWXkewbZNP1a1KknskpNGB_F8deU',
        {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            return res.json().then(data => {
                let error = 'unable to get user data'
                if (data && data.error && data.error.message) {
                    error = data.error.message;
                }
                alert(error)
                throw new Error(error)
            })
        }
    }).then(data => {
        authCtx.userdata( data.users[0].email, data.users[0].displayName, data.users[0].photoUrl);
    })/*if sucessfull connection*/
        .catch((err => {
            alert(err.message)
        }))//if connection failed

    const emailVerification = () => {
        console.log('working');
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAhbVAuWXkewbZNP1a1KknskpNGB_F8deU',
        {
            method: 'POST',
            body: JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken: authCtx.token
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            return res.json().then(data => {
                let error = 'unable to get user data'
                if (data && data.error && data.error.message) {
                    error = data.error.message;
                }
                alert(error)
                throw new Error(error)
            })
        }
    }).then(data => {
        alert(`Verification mail has been sent to ${data.email} Open your mail inbox and click verify`)
       //console.log(`email sent to ${data}`)
    })/*if sucessfull connection*/
        .catch((err => {
            alert(err.message)
        }))//if connection failed
    }
        

    return (
        <>
            <div className={classes.profile}>
            <img src={authCtx.imageUrl} alt='img' className={classes.img}/>
                <h3>User Details</h3>
                <form>
                    <label>User Name</label>
                    <input type='text' defaultValue={authCtx.username} />
                    <label>User Email</label>
                    <input type='text' defaultValue={authCtx.email} />
                    <p onClick={emailVerification}>! Verify Email</p>
                    
                </form>
            </div>
        </>
    )
}

export default Profile;