import React from 'react';

const Pre10 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Perfect</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Prices trends and strategy vocabulary'>
          Prices trends and strategy vocabulary
        </option>
        <option value='Synonyms'>Synonyms</option>
        <option value='Present Perfect Form'>Present Perfect For</option>
        <option value='Time Expressions'>Time Expressions</option>
        <option value='Describing a graph'>Describing a graph</option>
      </select>
    </>
  );
};

export default Pre10;
