import React from "react";


function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>age:</strong> {props.age}
          </li>
          <li>
            <strong>email:</strong> {props.email}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployye(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
