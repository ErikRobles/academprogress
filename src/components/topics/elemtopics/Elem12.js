import React from 'react';

const Elem12 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Perfect</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Employment Vocabulary'>Employment Vocabulary</option>
        <option value='Resumes'>Resumes</option>
        <option value='Present Perfect Form'>Present Perfect Form</option>
        <option value='Types of Work'>Types of Work</option>
        <option value='For and Since'>For and Since</option>
        <option value='Interviews'>Interviews</option>
      </select>
    </>
  );
};

export default Elem12;
