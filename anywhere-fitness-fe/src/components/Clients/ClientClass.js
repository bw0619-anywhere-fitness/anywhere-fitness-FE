import React from "react";
import { Link } from "react-router-dom";

const ClientClass = props => {
  return (
    <div className="client-class">
      <div className="client-class-label">Class</div>
      <div className="client-class-name">
        <div className="class-label">class:</div>
        <div className="class-prop">{props.clientClass.name}</div>
      </div>
      <div className="client-class-date">
        <div className="class-label">date:</div>
        <div className="class-prop">{props.clientClass.date}</div>
      </div>
      <div className="client-class-time">
        <div className="class-label">time:</div>
        <div className="class-prop">{props.clientClass.time}</div>
      </div>
      <div className="client-class-address">
        <div className="class-label">address:</div>
        <div className="class-prop">{props.clientClass.address}</div>
      </div>
      <div className="client-class-city">
        <div className="class-label">city:</div>
        <div className="class-prop">{props.clientClass.city}</div>
      </div>
      <div className="client-class-zipcode">
        <div className="class-label">zipcode:</div>
        <div className="class-prop">{props.clientClass.zipcode}</div>
      </div>
      <div className="client-class-description">
        <div className="class-label">description:</div>
        <div className="class-prop">{props.clientClass.description}</div>
      </div>
      <Link to={`/client/class`}>
        <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default ClientClass;
