import React from 'react';

const IntUnit = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <label>Please Select the Unit</label>
      <br />
      <select value={props.value} onChange={handleChange}>
        <option value='in1'>1</option>
        <option value='in2'>2</option>
        <option value='in3'>3</option>
        <option value='in4'>4</option>
        <option value='in5'>5</option>
        <option value='in6'>6</option>
        <option value='in7'>7</option>
        <option value='in8'>8</option>
        <option value='in9'>9</option>
        <option value='in10'>10</option>
        <option value='in11'>11</option>
        <option value='in12'>12</option>
        <option value='in13'>13</option>
        <option value='in14'>14</option>
        <option value='in15'>15</option>
      </select>
    </>
  );
};

export default IntUnit;
