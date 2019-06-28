import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { clientLogin } from "../../actions";
import awlogo from "../../assets/logocopy.png";

export class ClientLogin extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.clientLogin(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("/client/home");
      }
    });
  };

  render() {
    return (
      <div className="client-login">
        <div className="login-section">
          <div className="login-label">
            <img src={awlogo} alt="" />
          </div>
          <form className="login-form" onSubmit={this.login}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button className="login-btn">
              {this.props.loggingIn ? (
                <Loader
                  type="TailSpin"
                  color="#ffffff"
                  height="26"
                  width="26"
                />
              ) : (
                "Login"
              )}
            </button>
            <Link className="redirect-register" to="/client/register">
              Don't have an Account? Sign up here
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.clientLoginReducer.error,
    clientLoggingIn: state.clientLoginReducer.loggingIn
  };
};

export default connect(
  mapStateToProps,
  { clientLogin }
)(ClientLogin);
