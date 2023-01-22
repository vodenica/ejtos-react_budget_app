import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {

  const [ currency, setCurrency ] = useState('');
  const { dispatch } = useContext(AppContext);

  const updateCurrency = (event) => {

    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
  }

  return (
    <div>
      <select 
        className='btn btn-success dropdown-toggle'
        id='currencySelect'
        onChange={(event) =>updateCurrency(event)}> Currency {currency}
          <option value="£">Currency £ Pound</option>
          <option value="$">$ Dollar</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Rupee</option>
      </select>
      <br></br>
      {/* I used the below to test the value change when the dropdown selection is changed */}
      The input value has changed. The new value is: {currency}
      
      </div>
  );
};

export default Currency;
