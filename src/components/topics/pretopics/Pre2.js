import React from 'react';

const Pre2 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Countable and Uncountable</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Information Technology IT Vocabulary'>
          Information Technology IT Vocabulary
        </option>
        <option value='Quantity and Numbers'>Quantity and Numbers</option>
        <option value='Countable and Uncountable Practice'>
          Countable and Uncountable Practice
        </option>
        <option value='A - Some - Any Practice'>A/Some/Any Practice</option>
        <option value='Expression for checking information'>
          Expression for checking information
        </option>
        <option value='Introducing others'>Introducing others</option>
      </select>
    </>
  );
};

export default Pre2;
