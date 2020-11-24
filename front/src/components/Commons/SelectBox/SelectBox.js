import React from 'react';

import './SelectBox.scss';

function SelectBox({ children, className, style, onChange }) {
  
  return (
    <label className="select-box__arrow">
        <select onChange={onChange} className={`select-box ${className}`} style={style}>
        {children}
        </select>
    </label>
  );
}

export default SelectBox;