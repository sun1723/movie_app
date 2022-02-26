import { useState, useEffect } from 'react';
import { TypeRadio } from './TypeRadio';
import '../utils/type_list.scss';
import { DropDown } from './DropDown';

export const TypesList = ({types, collapMode, handleOnOpen, handleOnClose, dropDownEnable}) => {

  return (
    <div className='list'>
      <span className='list_title' id="type" onClick={(evt) =>{if(dropDownEnable){ handleOnClose()}else{handleOnOpen()}}}>Type </span>
      {!collapMode ? 
        (
          <div className='list_items'>
            {types.map( type => (
              <TypeRadio title={type}/>
            ))}
          </div>
        )
      : 
        <DropDown 
          open={dropDownEnable} 
          close={handleOnClose} 
          content= {(
            <div className='list_items'>
              {types.map( type => (
                <TypeRadio title={type}/>
              ))}
            </div>
          )} 
        />
      }
    </div>
  )
}