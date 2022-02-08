import React from 'react';

const Pre14 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Conditional Two</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Creativity Vocabulary'>Creativity Vocabulary</option>
        <option value='Suffixes - Al Able Ful Ive'>
          Suffixes - Al Able Ful Ive
        </option>
        <option value='Conditional Two Rules'>Conditional Two Rules</option>
        <option value='Finding Creative Solutions'>
          Finding Creative Solutions
        </option>
      </select>
    </>
  );
};

export default Pre14;
