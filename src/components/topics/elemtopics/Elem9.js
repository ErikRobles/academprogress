import React from 'react';

const Elem9 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Adjectives and Adverbs</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option disabled>Please Select a Topic</option>
        <option value='Products Vocabulary'>Products Vocabulary</option>
        <option value='Adjectives'>Adjectives</option>
        <option value='Size - Shape - Material adjectives'>
          Size, Shape and Material adjectives
        </option>
        <option value='Adverbs'>Adverbs</option>
        <option value='Describing a product'>Describing a product</option>
      </select>
    </>
  );
};

export default Elem9;
