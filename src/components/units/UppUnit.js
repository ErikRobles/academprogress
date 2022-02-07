import React from 'react';

const UppUnit = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <label>Please Select the Unit</label>
      <br />
      <select value={props.value} onChange={handleChange}>
        <option value='up1'>1</option>
        <option value='up2'>2</option>
        <option value='up3'>3</option>
        <option value='up4'>4</option>
        <option value='up5'>5</option>
        <option value='up6'>6</option>
        <option value='up7'>7</option>
        <option value='up8'>8</option>
        <option value='up9'>9</option>
        <option value='up10'>10</option>
        <option value='up11'>11</option>
        <option value='up12'>12</option>
        <option value='up13'>13</option>
        <option value='up14'>14</option>
        <option value='up15'>15</option>
      </select>
    </>
  );
};

export default UppUnit;
