import React from 'react';
import './NavigationBar.css'
import { Link} from "react-router-dom";
import * as ROUTES from "../../Constants/routes";

const NavigationBar = () =>{
    return (
        <header className="NavigationBar">
<nav>
      <ul>
        <Link to={ROUTES.HOME}><li>Home</li></Link>
        <Link to= {ROUTES.SIGN_UP}><li>Profile</li></Link>
        <li>Premium</li>
        <li>Support</li>
        <li>Download</li>
        <li>Sign UP</li>
        <li>Login</li>
      </ul>
    </nav>
    </header>
    )
}

export default NavigationBar;