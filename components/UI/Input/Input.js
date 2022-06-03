import React, { useState } from 'react';
import style from './Input.module.css';


const Input = ({type, changeInput}) => {
  const [value, setValue] = useState('');
  const changeValue = (event) => {
    setValue(event.target.value);
    changeInput(event.target.value);
  };
 
  return (
    <div className={style.input}>
      <input
        onChange={changeValue}
        value={value}
        type={type} />
    </div>
  )
};

export default Input;