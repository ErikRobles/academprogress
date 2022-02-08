import React from 'react';

const Pre7 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Future (Plans or Intentions)</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Business Location Vocabulary'>
          Business Location Vocabulary
        </option>
        <option value='Multi-part verbs - Up - Out'>
          Multi-part verbs - Up - Out
        </option>
        <option value='Future - Plans vs Intentions'>
          Future - Plans vs Intentions
        </option>
        <option value='Making an appointment'>Making an appointment</option>
      </select>
    </>
  );
};

export default Pre7;
