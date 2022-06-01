import React from 'react';

const Dropdown = (props) => {
  const clicked = (value) => {
    alert(value);
  };
  return (
    <>
      {props.default}
      <select multiple onChange={(e) => clicked(e.target.value)}>
        <option value={1}>1</option>
        <option value={1}>2</option>
      </select>
    </>
  );
};

export default Dropdown;
