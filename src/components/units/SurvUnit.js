import React from 'react';

const SurvUnit = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <label>Please Select the Unit</label>
      <br />
      <select value={props.value} onChange={handleChange}>
        <option value='sv1'>1</option>
        <option value='sv2'>2</option>
        <option value='sv3'>3</option>
        <option value='sv4'>4</option>
        <option value='sv5'>5</option>
        <option value='sv6'>6</option>
        <option value='sv7'>7</option>
        <option value='sv8'>8</option>
        <option value='sv9'>9</option>
        <option value='sv10'>10</option>
        <option value='sv11'>11</option>
        <option value='sv12'>12</option>
        <option value='sv13'>13</option>
        <option value='sv14'>14</option>
        <option value='sv15'>15</option>
      </select>
    </>
  );
};

export default SurvUnit;
