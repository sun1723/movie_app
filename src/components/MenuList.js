import '../utils/menu_list.scss'
import { useState } from 'react';
export const MenuList = ({options, handleChangeYear, selectedYear}) => {
  return (
    <select className='menu-select' value={selectedYear} onChange={evt => { handleChangeYear(evt.currentTarget.value)}}>
      {options.map (opt => {
        return (
          <option 
            className="menu-option" 
            value={opt.value}>{opt.value}
          </option>
        )})
      }
    </select>
  );
}