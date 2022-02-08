import React from 'react';

const Pre15 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Perfect and Past Simple</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Motivation at Work Vocabulary'>
          Motivation at Work Vocabulary
        </option>
        <option value='Present Perfect and Past Simple'>
          Present Perfect and Past Simple
        </option>
        <option value='Giving Reasons'>Giving Reasons</option>
      </select>
    </>
  );
};

export default Pre15;
