import React from "react";
import ContactCard from "./ContactCard";

import Display from "./Display";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
 
  const renderContactList = props.contacts.map((contact) => {
    return (
        <div className="ui main">
          <ContactCard
            contact={contact}
            clickHandler={deleteContactHandler}
            key={contact.id}
          />
        
      </div>
    );
  });
  return (
    <div className="ui celled list">
      <Display />
      <div className="ui main">{renderContactList}</div>
    
    </div>
  );
};

export default ContactList;
