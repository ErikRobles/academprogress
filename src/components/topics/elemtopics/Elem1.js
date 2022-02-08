import React from 'react';

const Elem1 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Verb To Be</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Working abroad vocabulary - countries and Nationalities'>
          Working Abroad
        </option>
        <option value='To Be Form'>To Be Form</option>
        <option value='Jobs'>Jobs</option>
        <option value='Introducing Yourself'>Introducing Yourself</option>
        <option value='Indefinite Articles - a - an'>
          Indefinite articles (A / An)
        </option>
      </select>
    </>
  );
};

export default Elem1;
