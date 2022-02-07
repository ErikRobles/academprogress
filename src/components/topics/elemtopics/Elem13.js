import React from 'react';

const Elem13 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Modals Advice and Suggestions</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option disabled>Please Select a Topic</option>
        <option value='Creative Thinking Vocabulary'>
          Creative Thinking Vocabulary
        </option>
        <option value='Could - Should - Should not'>
          Could, should, shouldn't
        </option>
        <option value='Make and Do'>Make and Do</option>
        <option value='Infinitive with or without to'>
          Infinitive with or without to
        </option>
        <option value='Discussing ideas or giving suggestions'>
          Discussing ideas or giving suggestions
        </option>
      </select>
    </>
  );
};

export default Elem13;
