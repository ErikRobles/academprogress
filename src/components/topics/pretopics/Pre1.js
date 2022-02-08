import React from 'react';

const Pre1 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Simple and Continuous</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Business Activities and Roles Vocabulary'>
          Business Activities and Roles Vocabulary
        </option>
        <option value='Word Building'>World Building</option>
        <option value='Present Simple vs continuous practice'>
          Present Simple vs continuous practice
        </option>
        <option value='How to Write Emails'>How to write emails</option>
        <option value='Explaining your job'>Explaining your job</option>
      </select>
    </>
  );
};

export default Pre1;
