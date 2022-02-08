import React from 'react';

const Elem14 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Present Continuous as Future</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Business Traveling Vocabulary'>
          Business Traveling Vocabulary
        </option>
        <option value='Future Expressions'>Future Expressions</option>
        <option value='Present Continuous for Future'>
          Present Continuous for Future
        </option>
        <option value='Business Plans and Arrangements'>
          Business Plans and Arrangements
        </option>
      </select>
    </>
  );
};

export default Elem14;
