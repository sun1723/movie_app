import { useState, useEffect } from 'react';
import { TypeRadio } from './TypeRadio';
import '../utils/type_list.scss';
import { DropDown } from './DropDown';

export const TypesList = ({selectedType, handleOnChangeType , types, collapMode, handleOnOpen, handleOnClose, dropDownEnable}) => {

  return (
    <div className='list' >
      <div className='list_title' id="type" onClick={(evt) =>{if(dropDownEnable){ handleOnClose()}else{handleOnOpen()}}}><a  title="Select Type">Type</a> </div>
      {!collapMode ? 
        (
          <div className='list_items'>
            {types.map( (type, index) => (
              <TypeRadio 
                title={type} 
                key={index}
                selectedType={selectedType}
                handleOnChangeType={handleOnChangeType}/>
            ))}
          </div>
        )
      : 
      <div className='list_menu'>
        <DropDown 
          open={dropDownEnable} 
          close={handleOnClose} 
          content= {(
            <div className='list_items' id="typeList">
              {types.map( (type, index) => (
                <TypeRadio 
                  title={type} 
                  key={index}
                  selectedType={selectedType}
                  handleOnChangeType={handleOnChangeType}/>
              ))}
            </div>
          )} 
        />
      </div>
      }
    </div>
  )
}