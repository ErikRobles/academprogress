import React from 'react';

const Pre11 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Passives</label>
      <br></br>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Insurance'>Insurance</option>
        <option value='Passives'>Passives</option>
        <option value='Expressing arguments'>Expressing arguments</option>
      </select>
    </>
  );
};

export default Pre11;
