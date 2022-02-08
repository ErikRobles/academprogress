import React from 'react';

const Pre8 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>The Imperative</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Online job market Vocabulary'>
          Online job market vocabulary
        </option>
        <option value='The Imperative'>The Imperative</option>
        <option value='Explaining What to do'>Explaining What to do</option>
      </select>
    </>
  );
};

export default Pre8;
