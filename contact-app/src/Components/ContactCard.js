import React from "react";
import user from "../Images/user.jpg";
import { useNavigate } from "react-router-dom";

const ContactCard = (props) => {
  let navigate = useNavigate();
  const { id, name, email } = props.contact;
  console.log(props.contact);
  const openDetails=()=>{ 
    props.setDetails(props.contact);
    navigate(`contact/${id}`);
  }
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content" onClick={openDetails}>
        {/* <Link
          to={{ 
            pathname: `contact/${id}`, 
            state: { n: props.contact } 
          }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link> */}
          <div className="header">{name}</div>
          <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      />
    </div>
  );
};

export default ContactCard;
