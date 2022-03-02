import "../utils/year_slider.scss"
import { useState } from "react";
import { MenuList } from "./MenuList";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { yearList } from "../utils/app_constant";

export const YearSlider = ({selectedYear, handleChangeYear, collapMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text" onClick={(evt) => {if(collapMode){setIsOpen(!isOpen)}}}>
        YEAR: { !collapMode || !isOpen ? selectedYear ? selectedYear : 'any' : ''}
      </div>
      {!collapMode ?
        (<>
          <div className="alter" >
            <input 
              type='number'
              value={selectedYear ? selectedYear : ''}
              placeholder="please type in year"
              onChange={(evt) => {handleChangeYear(evt.currentTarget.value ? evt.currentTarget.value : 0)}}
              />
            <HighlightOffIcon className="alter_icon" fontSize="small" onClick={evt => {handleChangeYear(0)}}/>
          </div>
        </>)    
      :
      isOpen ? 
      (<div className="menu">
        <MenuList 
          options={yearList()}
          handleChangeYear={handleChangeYear}
          selectedYear={selectedYear}/>
      </div>)
      :null
      }
    </>
  )
}