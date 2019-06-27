import React from 'react'
import { Link } from 'react-router-dom';

const InstructorClass = props => {
    return (
        <div className="instructor-class">
            <div className="instructor-class-label">
                Class
            </div>
            <div className="instructor-class-name">
                <div className="class-label">
                    class:
                    </div>
                <div className="class-prop">
                    {props.instructorClass.className}
                </div>
            </div>
            <div className="instructor-class-date">
                <div className="class-label">
                    date:
                </div>
                <div className="class-prop">
                    {props.instructorClass.date}
                </div>
            </div>
            <div className="instructor-class-time">
                <div className="class-label">
                    time:
                </div>
                <div className="class-prop">
                    {props.instructorClass.time}
                </div>
            </div>
            <div className="instructor-class-address">
                <div className="class-label">
                    address:
                    </div>
                <div className="class-prop">
                    {props.instructorClass.address}
                </div>
            </div>
            <div className="instructor-class-city">
                <div className="class-label">
                    city:
                    </div>
                <div className="class-prop">
                    {props.instructorClass.city}
                </div>
            </div>
            <div className="instructor-class-zipcode">
                <div className="class-label">
                    zipcode:
                </div>
                <div className="class-prop">
                    {props.instructorClass.zipcode}
                </div>
            </div>
            <div className="instructor-class-description">
                <div className="class-label">
                    description:
                </div>
                <div className="class-prop">
                    {props.instructorClass.description}
                </div>

            </div>
            <Link to={`/instructor/update-class-form/${props.instructorClass.classId}`}>
                <button className="view-details-btn">View Details</button>
            </Link>
        </div>

    )
}

export default InstructorClass
