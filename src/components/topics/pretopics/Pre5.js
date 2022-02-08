import React from 'react';

const Pre5 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Past Simple</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Success Vocabulary'>Success Vocabulary</option>
        <option value='Opposites and Collocations'>
          Opposites and Collocations
        </option>
        <option value='Setting up a new business'>
          Setting up a new business
        </option>
        <option value='Past and Time expressions Practice'>
          Past and Time expressions Practice
        </option>
        <option value='Telling a Story'>Telling a Story</option>
      </select>
    </>
  );
};

export default Pre5;
