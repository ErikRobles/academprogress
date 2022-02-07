import React from 'react';

const PreUnit = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <label>Please Select the Unit</label>
      <br />
      <select value={props.value} onChange={handleChange}>
        <option value='pr1'>1</option>
        <option value='pr2'>2</option>
        <option value='pr3'>3</option>
        <option value='pr4'>4</option>
        <option value='pr5'>5</option>
        <option value='pr6'>6</option>
        <option value='pr7'>7</option>
        <option value='pr8'>8</option>
        <option value='pr9'>9</option>
        <option value='pr10'>10</option>
        <option value='pr11'>11</option>
        <option value='pr12'>12</option>
        <option value='pr13'>13</option>
        <option value='pr14'>14</option>
        <option value='pr15'>15</option>
      </select>
    </>
  );
};

export default PreUnit;
