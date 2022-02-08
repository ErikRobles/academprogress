import React from 'react';

const Elem2 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Simple affirmative</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Work Teams Vocabulary'>Work Teams Vocabulary</option>
        <option value='Departments and people in a company'>
          Departments and people in a company
        </option>
        <option value='Telling the time'>Telling the time</option>
        <option value='Present Simple Affirmative'>
          Present Simple Affirmative
        </option>
        <option value='Frequency adverbs'>Frequency adverbs</option>
        <option value='Introducing others'>Introducing others</option>
      </select>
    </>
  );
};

export default Elem2;
