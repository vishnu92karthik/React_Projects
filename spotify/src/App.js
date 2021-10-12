
import './App.css';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import * as ROUTES from "./Constants/routes";
import Hero from './Components/Hero/Hero';
import NavigationBar from './Components/Navigation/NavigationBar';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LoginForm from './LoginForm/LoginForm';
import WebApp from './pages/WebApp/WebApp';

const App= () => {
  return ( 
    <Router>
      <NavigationBar />
      <Switch>
       <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
       <Route path={ROUTES.LOGIN} component={LoginForm} />
      <PrivateRoute path={ROUTES.WEB_APP}>
        <WebApp />
      </PrivateRoute>
      <Route path= {ROUTES.HOME} component= {Hero} />
      </Switch>
    </Router>
   
  );
}

export default App;
