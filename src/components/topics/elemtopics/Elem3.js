import React from 'react';

const Elem3 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Simple negative and questions</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Types of Companies vocabulary'>
          Types of Companies vocabulary
        </option>
        <option value='Word families'>Word families</option>
        <option value='Present simple negative questions and short answers'>
          Present simple negative questions and short answers
        </option>
        <option value='Articles a - an - the'>Articles a - an - the</option>
        <option value='Numbers - units - tens - hundreds'>
          Numbers (units/tens/hundreds)
        </option>
        <option value='Company Information'>Company Information</option>
      </select>
    </>
  );
};

export default Elem3;
