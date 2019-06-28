import React from "react";
import "./styles/App.scss";
import { Route } from "react-router-dom";
import Home from "./components/Instructors/Home";
import ClientHome from "./components/Clients/ClientHome";
import Login from "./components/Instructors/Login";
import ClientLogin from "./components/Clients/ClientLogin";
import Register from "./components/Instructors/Register";
import ClientRegister from "./components/Clients/ClientRegister";
import UpdateClassForm from "./components/Instructors/UpdateClassForm";
import PrivateRoute from "./components/Instructors/PrivateRoute";
import ClientPrivateRoute from "./components/Clients/ClientPrivateRoute";
import { connect } from "react-redux";
import { isLoggedIn, logout } from "./actions";
import Logo from "./assets/logo.png";
import cookie from "react-cookies";
import AddInstructorClass from "./components/Instructors/AddInstructorClass";
import ClientSignUpClasses from "./components/Clients/ClientSignUpClasses";
import ClientClassView from "./components/Clients/ClientClassView";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.isLoggedIn(cookie.load("instructor"));
    }
  }

  logout() {
    this.props.logout();
    this.props.history.push("/logout");
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div className="nav-links">
            <div className="home-link">
              <img src={Logo} alt="" />
            </div>
            {this.props.loggedIn || this.props.clientLoggedIn ? (
              <div className="user-links">
                <button className="logout-btn" onClick={() => this.logout()}>
                  Logout
                </button>
              </div>
            ) : (
              <div />
            )}
          </div>
        </nav>

        <Route
          path="/logout"
          component={() => {
            window.location.href =
              "https://anywhere-fitness-landing.netlify.com/";
            return null;
          }}
        />

        <Route
          exact
          path="/instructor"
          render={props => <Login {...props} />}
        />

        <Route
          exact
          path="/client"
          render={props => <ClientLogin {...props} />}
        />

        <Route
          path="/instructor/register"
          render={props => <Register {...props} />}
        />

        <PrivateRoute
          exact
          path="/instructor/home"
          component={props => <Home {...props} />}
        />

        <Route
          path="/instructor/add-class"
          render={props => <AddInstructorClass {...props} />}
        />

        <Route
          path="/instructor/update-class-form/:id"
          render={props => <UpdateClassForm {...props} />}
        />

        <Route
          path="/client/register"
          render={props => <ClientRegister {...props} />}
        />

        <Route
          path="/client/class/scheduled"
          render={props => <ClientSignUpClasses {...props} />}
        />

        <Route
          path="/client/class/view"
          render={props => <ClientClassView {...props} />}
        />

        <ClientPrivateRoute
          exact
          path="/client/home"
          component={props => <ClientHome {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.loggedIn,
    clientLoggedIn: state.clientLoginReducer.clientLoggedIn,
    singleClass: state.homeReducer.singleClass
  };
};

export default connect(
  mapStateToProps,
  { isLoggedIn, logout }
)(App);
