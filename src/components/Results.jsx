import React from "react";
import "./Results.css";

export default function Results({ results }) {
  return (
    <div className="Results">
      <table className="Results__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Citizenship</th>
            <th>License</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((person) => (
            <tr className="Results__name" key={person.id}>
              <td>{person.name}</td>
              <td>{person.id}</td>
              <td>{person.isCitizen.toString()}</td>
              <td>{person.hasDrivingLicense.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
