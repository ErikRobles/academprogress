import React from 'react';

const Elem6 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Countable and Uncountable Nouns</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Money Currencies'>Money Currencies</option>
        <option value='Large Numbers - thousands - millions'>
          Large Numbers - thousands - millions
        </option>
        <option value='How to say prices and costs'>
          How to say prices and costs
        </option>
        <option value='Countable and Uncountable nouns'>
          Countable and Uncountable nouns
        </option>
        <option value='Use of Some - any - how much - how many'>
          Use of Some - any - how much - how many
        </option>
        <option value='Ordering goods'>Ordering goods</option>
      </select>
    </>
  );
};

export default Elem6;
