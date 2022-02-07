import React from 'react';

const ElemUnit = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Please Select the Unit</label>
      <br />
      <select value={props.value} onChange={handleChange}>
        <option value='el1'>1</option>
        <option value='el2'>2</option>
        <option value='el3'>3</option>
        <option value='el4'>4</option>
        <option value='el5'>5</option>
        <option value='el6'>6</option>
        <option value='el7'>7</option>
        <option value='el8'>8</option>
        <option value='el9'>9</option>
        <option value='el10'>10</option>
        <option value='el11'>11</option>
        <option value='el12'>12</option>
        <option value='el13'>13</option>
        <option value='el14'>14</option>
        <option value='el15'>15</option>
      </select>
    </>
  );
};

export default ElemUnit;
