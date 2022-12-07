import React from "react";
import "../../assets/style.css";

const GetForm = (props) => {
  return (
    <>
      <div className="wrapperGetForm">
        <div className="header">
          <span>GET DATA USERS</span>
        </div>
        <div className="wrapperCard">
          {props.user?.map((users, index) => (
            <div key={index} className="cardForm">
              <div className="headerCard">
                <h1>Users Data</h1>
              </div>
              <div className="content">
                <p>NAME</p>
                <span>{users.name}</span>
                <p>EMAIL</p>
                <span>{users.email}</span>
                <p>PHONE</p>
                <span>{users.phone}</span>
                <p>WEBSITES</p>
                <span>{users.website}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetForm;
