import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateClass } from '../actions';

export class UpdateClassForm extends Component {
    state = {
        singleClass: this.props.singleClass
    }

    changeHandler = e => {
        this.setState({ singleClass: { ...this.state.singleClass, [e.target.name]: e.target.value } })
    };
    render() {
        console.log(this.state.singleClass)
        return (
            <div className="update-class-form">
                <form onSubmit={() => {
                    this.props.updateClass(1)
                }}>
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Class Name"
                        value={this.state.singleClass.name}
                        name="classname"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Date"
                        value={this.state.singleClass.date}
                        name="date"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Time"
                        value={this.state.singleClass.time}
                        name="time"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Address"
                        value={this.state.singleClass.address}
                        name="text"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="City"
                        value={this.state.singleClass.city}
                        name="city"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Zipcode"
                        value={this.state.singleClass.zipcode}
                        name="zipcode"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Description"
                        value={this.state.singleClass.description}
                        name="description"
                    />
                    <button>Update</button>
                    <button>Delete</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        singleClass: state.homeReducer.singleClass
    }
}

export default connect(
    mapStateToProps,
    {
        updateClass
    }
)(UpdateClassForm)
