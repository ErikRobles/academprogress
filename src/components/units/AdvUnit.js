import React from 'react';

const AdvUnit = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Please Select the Unit</label>
      <br />
      <select value={props.value} onChange={handleChange}>
        <option value='ad1'>1</option>
        <option value='ad2'>2</option>
        <option value='ad3'>3</option>
        <option value='ad4'>4</option>
        <option value='ad5'>5</option>
        <option value='ad6'>6</option>
        <option value='ad7'>7</option>
        <option value='ad8'>8</option>
        <option value='ad9'>9</option>
        <option value='ad10'>10</option>
        <option value='ad11'>11</option>
        <option value='ad12'>12</option>
        <option value='ad13'>13</option>
        <option value='ad14'>14</option>
        <option value='ad15'>15</option>
      </select>
    </>
  );
};

export default AdvUnit;
