import React from "react";
import "./ContactList.css";

export default function ContactList({ data }) {
  console.log(data);
  return (
    <div className="contactList">
      <div className="list">
        <p className="nameDiplay">{data.name}</p>
        <p className="emailDisplay">{data.email}</p>
        <button id="delete">Delete</button>
      </div>
    </div>
  );
}
