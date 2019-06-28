import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllClassesClient, signUpClientClass } from "../../actions";
import ClientClass from "./ClientClass";
import { Link } from "react-router-dom";

export class ClientHome extends Component {
  componentDidMount() {
    this.props.getAllClassesClient();
  }

  render() {
    return (
      <div className="client-home">
        <div className="client-home-top">
          <h1 className="client-home-header">All Upcoming Classes</h1>
          <Link to={`/client/class/scheduled`}>
            <button className="scheduled-btn">My Scheduled Classes</button>
          </Link>
        </div>
        <div className="client-classes">
          {this.props.clientClasses.map(clientClass => {
            return (
              <ClientClass
                key={clientClass.id}
                clientClass={clientClass}
                signUpClientClass={this.props.signUpClientClass}
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
    clientClasses: state.clientHomeReducer.clientClasses,
    error: state.clientHomeReducer.error
  };
};

export default connect(
  mapStateToProps,
  {
    getAllClassesClient,
    signUpClientClass
  }
)(ClientHome);
