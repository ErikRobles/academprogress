import React from 'react';

const Pre4 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Comparatives and Superlatives</label>
      <br />
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Fashion Vocabulary'>Fashion Vocabulary</option>
        <option value='Word Building'>Word Building</option>
        <option value='Comparative and Superlative Practice'>
          Comparative and Superlative Practice
        </option>
        <option value='Describing Products'>Describing Products</option>
      </select>
    </>
  );
};

export default Pre4;
