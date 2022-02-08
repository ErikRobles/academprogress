import React from 'react';

const Elem5 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Modals (offers/request and permission)</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Company Events Vocabulary'>
          Company Events Vocabulary
        </option>
        <option value='Food and Drinks - Describing food'>
          Food and Drinks - Describing food
        </option>
        <option value='Like and Would Like'>Like and Would Like</option>
        <option value='Can'>Can</option>
        <option value='Modals - offers - requests and permission'>
          'Modals - offers - requests and permission
        </option>
      </select>
    </>
  );
};

export default Elem5;
