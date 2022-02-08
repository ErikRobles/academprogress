import React from 'react';

const Elem11 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Comparatives and Superlatives</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Business Location vocabulary'>
          Buiness Location vocabulary
        </option>
        <option value='Adjectives related to work'>
          Adjectives related to work
        </option>
        <option value='Comparatives'>Comparatives</option>
        <option value='Superlatives'>Superlatives</option>
        <option value='Giving Opinions'>Giving Opinions</option>
      </select>
    </>
  );
};

export default Elem11;
