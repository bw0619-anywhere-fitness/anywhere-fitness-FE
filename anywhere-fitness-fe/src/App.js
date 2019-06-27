import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './components/Instructors/Home';
import Welcome from './components/Instructors/Welcome';
import Login from './components/Instructors/Login';
import Register from './components/Instructors/Register';
import UpdateClassForm from './components/Instructors/UpdateClassForm';
import PrivateRoute from "./components/Instructors/PrivateRoute";
import { connect } from "react-redux";
import { isLoggedIn, logout } from './actions';
import Logo from './assets/logo.svg';
import cookie from 'react-cookies';
import AddInstructorClass from './components/Instructors/AddInstructorClass';

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.isLoggedIn(cookie.load('instructor'))
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav">
            <div className="nav-links">
              <div className="home-link">
                <NavLink to="/business-home"><img src={Logo} alt="" /></NavLink>
              </div>
              {!this.props.loggedIn ? (
                <div className="user-links">
                  <NavLink className="login-btn-nav" to="/instructor-login">Login</NavLink>
                  <NavLink className="register-btn-nav" to="/instructor-register">Register</NavLink>
                </div>) : (
                  <div className="user-links">
                    <NavLink className="logout-btn" onClick={() => this.props.logout()} to="/instructor-login">Logout</NavLink>
                  </div>
                )}
            </div>
          </nav>

          <Route
            exact
            path="/"
            render={props => (
              <Welcome
                {...props}
              />
            )}
          />

          <PrivateRoute
            exact
            path="/business-home"
            component={props => (
              <Home
                {...props}
              />
            )} />

          <Route
            path="/instructor-register"
            render={props => (
              <Register
                {...props}
              />
            )} />

          <Route
            path="/instructor-login"
            render={props => (
              <Login
                {...props}
              />
            )} />

          <Route
            path="/add-class"
            render={props => (
              <AddInstructorClass
                {...props}
              />
            )}
          />

          <Route
            path="/update-class-form/:id"
            render={(props) => (
              <UpdateClassForm
                {...props}
              />
            )}
          />

        </div>
      </Router >

    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.loggedIn,
    singleClass: state.homeReducer.singleClass
  }
}

export default connect(
  mapStateToProps,
  { isLoggedIn, logout }
)(App);
