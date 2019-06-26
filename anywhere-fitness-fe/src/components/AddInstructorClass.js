import React, { Component } from 'react'

export class AddInstructorClass extends Component {
    render() {
        return (
            <div className="add-class-form">
                <form>
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Class Name"
                        name="name"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Date"
                        name="date"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Time"
                        name="time"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Address"
                        name="address"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="City"
                        name="city"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Zipcode"
                        name="zipcode"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Description"
                        name="description"
                    />
                    <button>Add Class</button>
                </form>
            </div>
        )
    }
}

export default AddInstructorClass
