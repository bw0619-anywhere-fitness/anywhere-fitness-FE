import React, { Component } from 'react'
import Loader from "react-loader-spinner";

export class Register extends Component {
    state = {
        credentials: {
            fullname: "",
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

    render() {
        return (
            <div className="register">
                Register Page
                <form className="register-form" onSubmit={this.register}>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        value={this.state.credentials.fullname}
                        onChange={this.handleChange}
                    />
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
                    <button>
                        {this.props.registering ? (
                            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                                "Log in"
                            )}
                    </button>
                </form>
            </div>
        )
    }
}

export default Register
