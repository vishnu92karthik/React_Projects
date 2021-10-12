import React, {useState } from 'react';
import { useHistory } from 'react-router';
import { WEB_APP } from '../../Constants/routes';
import { useAuth } from '../../context/AuthContext';
//import { FirebaseContext } from '../../context/FirebaseContext';
import './SignUpForm.css';
const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const auth = useAuth();
    return(
        <div className="container">
 <form onSubmit ={(event) => {
     event.preventDefault();
    auth.signup({email,password,callback: () =>  history.push(WEB_APP)})
     alert(email+" "+password);
    setEmail("");
     setPassword("");
     }}>
     <label>E-mail</label>
     <input type="email"
     value={email}
     onChange= {(event) => setEmail(event.target.value)}
     ></input>
     <label>Password</label>
     <input type="password"
     value={password}
     onChange={(event) => setPassword(event.target.value)}
     ></input>
     <button type="submit">Sign up</button>
 </form>
 </div>
 
    )
}

export default SignUpForm;