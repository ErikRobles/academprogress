import React from 'react';

const Sur = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label></label>
      <select value={props.value} onChange={handleTopicChange}>
        <option disabled>Please Select a Topic</option>
        <option value=''></option>
        <option value=''></option>
        <option value=''></option>
        <option value=''></option>
        <option value=''></option>
      </select>
    </>
  );
};

export default Sur;
