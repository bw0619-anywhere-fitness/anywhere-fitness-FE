import React, { Component } from 'react'
import { connect } from 'react-redux'

export class UpdateClassForm extends Component {

    changeHandler = e => {
        let value = e.target.value;
        this.setState({
            [e.target.name]: value
        })
    };
    render() {
        return (
            <div className="update-class-form">
                {this.props.singleClass.map(classProp => {
                    console.log(classProp)
                    return (
                        <form key={classProp.id} action="">
                            <input
                                type="text"
                                onChange={this.changeHandler}
                                placeholder="Class Name"
                                value={classProp.name}
                                name=""
                            />
                            <input
                                type="text"
                                onChange={this.changeHandler}
                                placeholder="Date"
                                value={classProp.date}
                                name=""
                            />
                            <input
                                type="text"
                                onChange={this.changeHandler}
                                placeholder="Time"
                                value={classProp.time}
                                name=""
                            />
                            <input
                                type="text"
                                onChange={this.changeHandler}
                                placeholder="Address"
                                value={classProp.address}
                                name=""
                            />
                            <input
                                type="text"
                                onChange={this.changeHandler}
                                placeholder="City"
                                value={classProp.city}
                                name=""
                            />
                            <input
                                type="text"
                                onChange={this.changeHandler}
                                placeholder="Zipcode"
                                value={classProp.zipcode}
                                name=""
                            />
                            <input
                                type="text"
                                onChange={this.changeHandler}
                                placeholder="Description"
                                value={classProp.description}
                                name=""
                            />
                            <button>Update</button>
                            <button>Delete</button>
                        </form>
                    )
                })
                }

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
    mapStateToProps
)(UpdateClassForm)
