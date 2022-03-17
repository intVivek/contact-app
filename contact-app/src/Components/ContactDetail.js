import React from "react";
import user from "../Images/user.jpg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const ContactDetail = (props) => {
   console.log(props)
//   const {name, email} = props.location.state.contact;
  
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{props.n}</div>
          <div className="description">{props.e}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
