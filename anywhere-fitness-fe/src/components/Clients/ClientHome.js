import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllClassesClient } from "../../actions";
import ClientClass from "./ClientClass";

export class ClientHome extends Component {
  componentDidMount() {
    this.props.getAllClassesClient();
  }
  render() {
    return (
      <div className="client-home">
        <div className="client-classes">
          {this.props.clientClasses.map(clientClass => {
            return (
              <ClientClass key={clientClass.id} clientClass={clientClass} />
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
    getAllClassesClient
  }
)(ClientHome);
