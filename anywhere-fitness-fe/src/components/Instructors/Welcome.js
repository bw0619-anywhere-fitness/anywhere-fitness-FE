import React, { Component } from 'react'

export class Welcome extends Component {
    componentDidMount() {
        this.props.history.push('/instructor-login');
    }
    render() {
        return (
            <div className="welcome">
                <div className="welcome-header">
                    <h1> Welcome to Anywhere Fitness!</h1>
                </div>
            </div>
        )
    }
}

export default Welcome
