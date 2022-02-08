import React from 'react';

const Pre9 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Modals of Obligation</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option disabled>Please Select a Topic</option>
        <option value='Marketing Vocabulary'>Marketing Vocabulary</option>
        <option value='Word Building'>Word Building</option>
        <option value='Modals of Obligation Practice'>
          Modals of Obligation Practice
        </option>
        <option value='Making Suggestions'>Making Suggestions</option>
      </select>
    </>
  );
};

export default Pre9;
