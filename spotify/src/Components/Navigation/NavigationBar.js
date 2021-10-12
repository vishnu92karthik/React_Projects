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
        <Link to={ROUTES.SIGN_UP}>
                <li>Sign Up</li>
              </Link>
        <li>Premium</li>
        <li>Support</li>
        <li>Download</li>
        <li>Profile</li>
        <Link to={ROUTES.LOGIN}>
                <li>Login</li>
              </Link>
      </ul>
    </nav>
    </header>
    )
}

export default NavigationBar;