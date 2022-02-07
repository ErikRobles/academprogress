import React from 'react';

const Elem8 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Past simple negative and questions</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option disabled>Please Select a Topic</option>
        <option value='Finding Solutions Vocabulary'>
          Finding Solutions Vocabulary
        </option>
        <option value='Form and Short answers'>Form and Short answers</option>
        <option value='Explaining a technical problem'>
          Explaining a technical problem
        </option>
      </select>
    </>
  );
};

export default Elem8;
