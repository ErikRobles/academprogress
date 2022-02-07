import React from 'react';

const SpeUnit = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <label>Please Select the Unit</label>
      <br />
      <select value={props.value} onChange={handleChange}>
        <option value='sp1'>1</option>
        <option value='sp2'>2</option>
        <option value='sp3'>3</option>
        <option value='sp4'>4</option>
        <option value='sp5'>5</option>
        <option value='sp6'>6</option>
        <option value='sp7'>7</option>
        <option value='sp8'>8</option>
        <option value='sp9'>9</option>
        <option value='sp10'>10</option>
        <option value='sp11'>11</option>
        <option value='sp12'>12</option>
        <option value='sp13'>13</option>
        <option value='sp14'>14</option>
        <option value='sp15'>15</option>
      </select>
    </>
  );
};

export default SpeUnit;
