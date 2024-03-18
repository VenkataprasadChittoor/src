import React from 'react';
import './mystyles.css';
const CondStyle = (props) => {
    let cname= props.primary ? 'primary' : '';
  return (
    <div>
      <h1 className='error'> Conditional Styling</h1>
      <h2 className={`${cname} font-x`}>Appllying condtional styling</h2>
      <button className='btn btn-danger'>click me</button>
    </div>
  )
}

export default CondStyle;
