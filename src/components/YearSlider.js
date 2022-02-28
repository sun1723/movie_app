import "../utils/year_slider.scss"

export const YearSlider = ({selectedYear, handleChangeYear}) => {
  return (
    <>
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
      <div className="text">
        YEAR: {selectedYear ? selectedYear : 'any'}
      </div>
    </>
  )
}