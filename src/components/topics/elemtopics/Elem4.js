import React from 'react';

const Elem4 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Prepositions of Place</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Types of Offices and office items vocabulary'>
          Types of Offices and office items vocabulary
        </option>
        <option value='Prepositions of Place'>Prepositions of Place</option>
        <option value='The Imperative Form'>The Imperative Form</option>
        <option value='Giving Directions'>Giving Directions</option>
      </select>
    </>
  );
};

export default Elem4;
