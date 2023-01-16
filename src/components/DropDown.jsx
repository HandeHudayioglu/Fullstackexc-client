import React from 'react';
import './DropDown.css';

export default function DropDown({
  searchBy,
  setSearchBy,
  checkboxLabel,
  checkboxValue,
  setCheckboxValue,
}) {
  return (
    <div className="DropDown">
      <label className="DropDown__label">
        Search By:
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
          className="DropDown__select"
        >
          <option value="name">Name</option>
          <option value="id">ID</option>
          <option value="isCitizen">Citizenship</option>
          <option value="hasLicense">Drivers License</option>
          <option value="children">Number of Children by ID</option>
        </select>
      </label>
      <label
        className={
          checkboxLabel === 'none'
            ? 'DropDown__label label-2 label-2-none'
            : 'DropDown__label label-2'
        }
      >
        {checkboxLabel}
        <input
          type="checkbox"
          value={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)}
        />
      </label>
    </div>
  );
}
