import React, { Component } from 'react'

export class ClientWelcome extends Component {
    componentDidMount() {
        this.props.history.push('/client-login');
    }
    render() {
        return (
            <div>
                Client Welcome
            </div>
        )
    }
}

export default ClientWelcome
