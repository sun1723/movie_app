import '../utils/type_radio.scss'
import {types} from '../utils/app_constant'
export const TypeRadio = ({title, handleOnChangeType,selectedType}) => {

  return (
    <label id="radio_con" className="radio-container"  onClick={(evt)=> {handleOnChangeType(title)}}>
      {selectedType == title ?
        <input type="radio" name="radio" id="radio_icon" value={title} defaultChecked={true}/>
      :
        <input type="radio" name="radio" id="radio_icon" value={title} />
      }
      <span id="radio_title">{title}</span>
      <span className="checkmark"></span>
    </label>
  )
}