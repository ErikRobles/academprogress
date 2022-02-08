import React from 'react';

const Pre12 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Conditional One</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Customer Service Vocabulary'>
          Customer Service Vocabulary
        </option>
        <option value='Conditional One Form'>Conditional One Form</option>
        <option value='Dealing with Problems'>Dealing with Problems</option>
      </select>
    </>
  );
};

export default Pre12;
