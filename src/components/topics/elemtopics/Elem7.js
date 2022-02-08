import React from 'react';

const Elem7 = (props) => {
  const handleTopicChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Past Simple Affirmative - Prepositions of Time</label>
      <select value={props.value} onChange={handleTopicChange}>
        <option>Please Select a Topic</option>
        <option value='Business Projects'>Business Projects</option>
        <option value='Past Simple Affirmative'>Past Simple Affirmative</option>
        <option value='Verbs in Past Tense'>Verbs in Past Tense</option>
        <option value='Ordinal Numbers'>Ordinal Numbers</option>
        <option value='Prepositions of time - in - on - at'>
          Prepositions of time - in - on - at
        </option>
        <option value='Prepositions + nouns'>Prepositions + nouns</option>
        <option value='Talking about projects'>Talking about projects</option>
        <option value='Sequencing phrases'>Sequencing phrases</option>
      </select>
    </>
  );
};

export default Elem7;
