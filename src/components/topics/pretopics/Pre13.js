import React from 'react';

const Pre13 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Adjectives and Adverbs</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Production and Productivity Vocabulary'>
          Production and Productivity Vocabulary
        </option>
        <option value='Adjectives and Adverb Rules'>
          Adjectives and Adverb Rules
        </option>
        <option value='Managing Time'>Managing Time</option>
      </select>
    </>
  );
};

export default Pre13;
