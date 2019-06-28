import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { registerClient } from "../../actions";
import { connect } from "react-redux";

export class ClientRegister extends Component {
  state = {
    clientUser: {
      fullname: "",
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      clientUser: {
        ...this.state.clientUser,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.registerClient(this.state.clientUser).then(res => {
      if (res) {
        this.props.history.push("/client");
      }
    });
  };

  render() {
    return (
      <div className="client-register">
        <div className="register-section">
          <div className="register-label">Register Page</div>
          <form className="register-form" onSubmit={this.register}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={this.state.clientUser.fullname}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.clientUser.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.clientUser.password}
              onChange={this.handleChange}
            />
            <button className="register-btn">
              {this.props.creatingUser ? (
                <Loader
                  type="TailSpin"
                  color="#ffffff"
                  height="26"
                  width="26"
                />
              ) : (
                "Register"
              )}
            </button>
            <Link className="redirect-login" to="/client/login">
              Already have an Account? Sign in here
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.clientRegisterReducer.error,
    creatingClientUser: state.clientRegisterReducer.creatingClientUser
  };
};

export default connect(
  mapStateToProps,
  { registerClient }
)(ClientRegister);
