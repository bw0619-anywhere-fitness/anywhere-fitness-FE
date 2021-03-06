import React from "react";
import { Link } from "react-router-dom";
import Treadmills from "../../assets/treadmills.jpg";
import cookie from "react-cookies";

const ClientClass = props => {
  return (
    <div className="client-class">
      <img src={Treadmills} alt="" />
      <div className="client-class-name">
        <div className="class-prop">{props.clientClass.name}</div>
      </div>
      <div className="client-class-group">
        <div className="class-prop">{props.clientClass.date}</div>
        <div className="class-prop">{props.clientClass.time}</div>
      </div>
      <div className="client-class-group">
        <div className="class-prop">{props.clientClass.address}</div>
        <div className="class-prop">{props.clientClass.city}</div>
        <div className="class-prop">{props.clientClass.zipcode}</div>
      </div>
      <div className="client-class-description">
        <div className="class-prop">{props.clientClass.description}</div>
      </div>
      <Link to={`/client/class/scheduled`}>
        <button
          onClick={() =>
            props.signUpClientClass(
              cookie.load("client")[0]["id"],
              props.clientClass.id
            )
          }
          className="view-details-btn"
        >
          Schedule Class
        </button>
      </Link>
    </div>
  );
};

export default ClientClass;
