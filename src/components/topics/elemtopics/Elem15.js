import React from 'react';

const Elem15 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Will used for decisions or predictions</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Trends Vocabulary'>Trends Vocabulary</option>
        <option value='Graphs and Charts'>Graphs and Charts</option>
        <option value='Will for Decisions'>Will for Decisions</option>
        <option value='Numbers and Symbols'>Numbers and Symbols</option>
        <option value='Will for Predictions'>Will for Predictions</option>
        <option value='Talking about Friends'>Talking about Friends</option>
      </select>
    </>
  );
};

export default Elem15;
