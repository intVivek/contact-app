import React from "react";
import { Link } from "react-router-dom";
const Display = () => {
    return (
      <div className="ui main">
        <div className="ui main">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
        </div>
      </div>
    );
  };

        
  export default Display;