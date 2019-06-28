import React, { Component } from "react";
import { connect } from "react-redux";
import { getClassByClientId } from "../../actions";
import cookie from "react-cookies";
import ClientSignUpClass from "./ClientSignUpClass";

export class ClientSignUpClasses extends Component {
  componentDidMount() {
    this.props.getClassByClientId(cookie.load("client")[0]["id"]);
  }

  render() {
    return (
      <div className="client-signup-classes">
        <div className="signup-classes">
          {this.props.clientSignUpClasses.map(clientSignUpClass => {
            return (
              <ClientSignUpClass
                key={clientSignUpClass.classId}
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
