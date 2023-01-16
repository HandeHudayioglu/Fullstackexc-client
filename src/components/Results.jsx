import React from 'react';
import './Results.css';

export default function Results({ results }) {
  return (
    <div className="Results">
      {results?.map((person) => (
        <div className="Results__name" key={person.id}>
         {person.name} {person.isCitizen}  
        </div>
      ))}
    </div>
  );

}
