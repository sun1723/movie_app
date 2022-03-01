import "../utils/year_slider.scss"
import { useState } from "react";
import { MenuList } from "./MenuList";

export const YearSlider = ({selectedYear, handleChangeYear, collapMode}) => {
  const [isOpen, setIsOpen] = useState(false);
  const yearOptions = [
    {label: "any", value:"any"},
    {label: "2022",value:"2022"},
    {label: "2021", value: "2021"},
    {label: "2020", value: "2020"},
    {label: "2019", value: "2019"},
    {label: "2018", value: "2018"}
  ]
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
          </div>
          <div className="slider">
            <span className="slider_start">1900</span>
            <input type="range"  
              min="1900" 
              max="2050" 
              step="1"
              defaultValue={selectedYear}
              onChange={(evt) => {handleChangeYear(evt.currentTarget.value)}} />
            <span className="slider_end">2050</span>
          </div>
        </>)    
      :
      isOpen ? 
      (<div className="menu">
        <MenuList 
          options={yearOptions}
          handleChangeYear={handleChangeYear}
          selectedYear={selectedYear}/>
      </div>)
      :null
      }
    </>
  )
}