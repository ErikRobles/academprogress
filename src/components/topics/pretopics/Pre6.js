import React from 'react';

const Pre6 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Modals of Possibility</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Venture Projects Vocabulary'>
          Venture Projects Vocabulary
        </option>
        <option value='Modals of Possibility - Will - May - Might - Could'>
          Modals of Possibility (Will, May, Might, Could)
        </option>
        <option value='Making Predictions'>Making Predictions</option>
      </select>
    </>
  );
};

export default Pre6;
