import React from 'react';
import './styles/ClientApp.scss';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ClientHome from './components/Clients/ClientHome';
import ClientWelcome from './components/Clients/ClientWelcome';
import ClientLogin from './components/Clients/ClientLogin';
import ClientRegister from './components/Clients/ClientRegister';
import ClientPrivateRoute from "./components/Clients/ClientPrivateRoute";
import { connect } from "react-redux";
import Logo from './assets/logo.svg';

class ClientApp extends React.Component {

  render() {
    return (
      <Router>
        <div className="ClientApp">
          <nav className="nav">
            <div className="nav-links">
              <div className="home-link">
                <NavLink to="/client-home"><img src={Logo} alt="" /></NavLink>
              </div>
              {!this.props.loggedIn ? (
                <div className="user-links">
                  <NavLink className="login-btn-nav" to="/client-login">Login</NavLink>
                  <NavLink className="register-btn-nav" to="/client-register">Register</NavLink>
                </div>) : (
                  <div className="user-links">
                    <NavLink className="logout-btn" onClick={() => this.props.logout()} to="/client-login">Logout</NavLink>
                  </div>
                )}
            </div>
          </nav>

          <Route
            exact
            path="/client-app"
            render={props => (
              <ClientWelcome
                {...props}
              />
            )}
          />

          <ClientPrivateRoute
            exact
            path="/client-home"
            component={props => (
              <ClientHome
                {...props}
              />
            )} />

          <Route
            path="/client-register"
            render={props => (
              <ClientRegister
                {...props}
              />
            )} />

          <Route
            path="/client-login"
            render={props => (
              <ClientLogin
                {...props}
              />
            )} />

        </div>
      </Router >

    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
  }
}

export default connect(mapStateToProps)(ClientApp);
