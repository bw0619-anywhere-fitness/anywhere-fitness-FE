import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUpdateForm } from '../actions';


const InstructorClass = props => {
    const updateForm = (e, classProp) => {
        props.setUpdateForm(e, classProp)
    }
    return (
        < div className="instructor-class" >
            <div className="instructor-class-name">class: {props.instructorClass.className}</div>
            <div className="instructor-class-date">date: {props.instructorClass.date}</div>
            <div className="instructor-class-time">time: {props.instructorClass.time}</div>
            <div className="instructor-class-address">address: {props.instructorClass.address}</div>
            <div className="instructor-class-city">city: {props.instructorClass.city}</div>
            <div className="instructor-class-zipcode">zipcode: {props.instructorClass.zipcode}</div>
            <div className="instructor-class-description">description: {props.instructorClass.description}</div>
            <Link to="/update-class-form">
                <button onClick={() => { props.getClassByInstructor(props.instructorClass.classId) }}>View Details</button>
            </Link>
            <button onClick={(e) => {
                updateForm(e, props.singleClass)
            }}>Update</button>
        </div >

    )
}

const mapStateToProps = state => {
    return {
        singleClass: state.homeReducer.singleClass
    }
}

export default connect(
    mapStateToProps,
    {
        setUpdateForm
    }
)(InstructorClass)
