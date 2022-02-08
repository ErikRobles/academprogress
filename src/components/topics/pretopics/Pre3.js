import React from 'react';

const Pre3 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Offers and Requests</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Work Etiquette Vocabulary'>
          Work Etiquette Vocabulary
        </option>
        <option value='Synonyms'>Synonyms</option>
        <option value='Prefixes - Un - In - Dis - Im'>
          Prefixes (Un, In, Dis, Im)
        </option>
        <option value='Offers and Requests'>Offers and Requests</option>
        <option value='Being polite vs direct'>Being polite vs direct</option>
      </select>
    </>
  );
};

export default Pre3;
