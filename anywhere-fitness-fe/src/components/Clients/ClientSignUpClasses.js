import React, { Component } from "react";
import { connect } from "react-redux";
import { getClassByClientId } from "../../actions";
import cookie from "react-cookies";
import ClientSignUpClass from "./ClientSignUpClass";
import { Link } from "react-router-dom";
import uuid from "uuid";

export class ClientSignUpClasses extends Component {
  componentDidMount() {
    this.props.getClassByClientId(cookie.load("client")[0]["id"]);
  }

  render() {
    return (
      <div className="client-signup-classes">
        <div className="client-signup-top">
          <Link to="/client/home">
            <button className="all-back-btn">All Classes</button>
          </Link>
          <h1 className="client-signup-header">My Scheduled Classes</h1>
        </div>
        <div className="signup-classes">
          {this.props.clientSignUpClasses.map(clientSignUpClass => {
            return (
              <ClientSignUpClass
                key={uuid.v4()}
                clientSignUpClass={clientSignUpClass}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientSignUpClasses: state.clientHomeReducer.clientSignUpClasses,
    error: state.clientHomeReducer.error
  };
};

export default connect(
  mapStateToProps,
  {
    getClassByClientId
  }
)(ClientSignUpClasses);
