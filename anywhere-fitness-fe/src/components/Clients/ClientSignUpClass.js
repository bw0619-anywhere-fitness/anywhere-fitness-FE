import React from "react";
import PersonalTrainer from "../../assets/personal trainer-carousel.jpg";

const ClientSignUpClass = props => {
  return (
    <div className="signup-class">
      <img src={PersonalTrainer} alt="" />
      <div className="signup-class-name">
        <div className="signup-prop">{props.clientSignUpClass.className}</div>
      </div>
      <div className="signup-class-group">
        <div className="signup-prop">{props.clientSignUpClass.date}</div>
        <div className="signup-prop">{props.clientSignUpClass.time}</div>
      </div>
      <div className="signup-class-group">
        <div className="signup-prop">{props.clientSignUpClass.address}</div>
        <div className="signup-prop">{props.clientSignUpClass.city}</div>
        <div className="signup-prop">{props.clientSignUpClass.zipcode}</div>
      </div>
      <div className="client-signup-description">
        <div className="signup-prop">{props.clientSignUpClass.description}</div>
      </div>
    </div>
  );
};

export default ClientSignUpClass;
