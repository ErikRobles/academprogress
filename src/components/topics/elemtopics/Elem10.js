import React from 'react';

const Elem10 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Continuous</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option disabled>Please Select a Topic</option>
        <option value='Competitors vocalulary'>Competitors vocalulary</option>
        <option value='Word Families'>Word Families</option>
        <option value='SWOT Analysis'>SWOT Analysis</option>
        <option value='Compound nouns'>Compound nouns</option>
        <option value='Present Continuous Form'>Present Continuous Form</option>
        <option value='Present Simple vs Continuous '>
          Difference between Present Simple and Continuous
        </option>
      </select>
    </>
  );
};

export default Elem10;
