import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllClassesClient } from '../../actions';

export class ClientHome extends Component {



    render() {
        console.log(this.props)
        return (
            <div className="client-home">
                Client Home
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clientClasses: state.clientHomeReducer.clientClasses,
        error: state.clientHomeReducer.error
    }
}

export default connect(
    mapStateToProps,
    {
        getAllClassesClient
    }
)(ClientHome)
