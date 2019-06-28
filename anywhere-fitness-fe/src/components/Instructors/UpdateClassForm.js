import React, { Component } from "react";
import { connect } from "react-redux";
import { updateClass, deleteClass, getClassByInstructor } from "../../actions";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import WorkoutGraphicOrng from "../../assets/workoutwallpaper.jpg";
import { Link } from "react-router-dom";

export class UpdateClassForm extends Component {
  state = {
    singleClass: {
      name: "",
      date: "",
      time: "",
      address: "",
      city: "",
      zipcode: "",
      description: ""
    }
  };

  componentDidMount() {
    this.props.getClassByInstructor(4);
    axiosWithAuth()
      .get(
        `https://anywhere-fitness-azra-be.herokuapp.com/api/classes/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        this.setState({ singleClass: res.data });
      });
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      singleClass: {
        ...prevState.singleClass,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <div className="update-class">
        <div className="update-class-form">
          <img src={WorkoutGraphicOrng} alt="" />
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.updateClass(
                this.state.singleClass.id,
                this.state.singleClass
              );
              this.props.history.push("/instructor/home");
            }}
          >
            <Link to="/instructor/home">
              <button className="back-btn">{`<`} CLASSES</button>
            </Link>
            <div className="form-label">EDIT A CLASS</div>
            <div className="form-group">
              class:
              <input
                required
                type="text"
                onChange={this.changeHandler}
                placeholder="Class Name"
                value={this.state.singleClass.name}
                name="name"
                className="update-name"
              />
            </div>
            <div className="form-group">
              date:
              <input
                required
                type="text"
                onChange={this.changeHandler}
                placeholder="Date"
                value={this.state.singleClass.date}
                name="date"
              />
              time:
              <input
                required
                type="text"
                onChange={this.changeHandler}
                placeholder="Time"
                value={this.state.singleClass.time}
                name="time"
              />
            </div>
            <div className="form-group">
              address:
              <input
                required
                type="text"
                onChange={this.changeHandler}
                placeholder="Address"
                value={this.state.singleClass.address}
                name="address"
              />
              <input
                required
                type="text"
                onChange={this.changeHandler}
                placeholder="City"
                value={this.state.singleClass.city}
                name="city"
              />
              <input
                required
                type="text"
                onChange={this.changeHandler}
                placeholder="Zipcode"
                value={this.state.singleClass.zipcode}
                name="zipcode"
              />
            </div>
            <div className="form-group">
              description:
              <input
                required
                type="text"
                onChange={this.changeHandler}
                placeholder="Description"
                value={this.state.singleClass.description}
                name="description"
              />
            </div>
            <div className="update-form-buttons">
              <button className="update-btn">Update</button>
              <button
                className="delete-btn"
                onClick={e => {
                  e.preventDefault();
                  this.props.deleteClass(
                    this.state.singleClass.id,
                    this.state.singleClass
                  );
                  this.props.history.push("/instructor/home");
                }}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleClass: state.homeReducer.singleClass
  };
};

export default connect(
  mapStateToProps,
  {
    updateClass,
    deleteClass,
    getClassByInstructor
  }
)(UpdateClassForm);
