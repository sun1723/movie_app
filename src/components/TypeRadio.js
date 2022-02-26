import '../utils/type_radio.scss'
import {types} from '../utils/app_constant'
export const TypeRadio = ({title, handleOnChangeType,checked}) => {

  return (
    <label id="radio_con" className="radio-container"  onClick={(evt)=> {handleOnChangeType(title)}}>
      <input type="radio" name="radio" id="radio_icon" value={title} checked={checked}/>
      <span id="radio_title">{title}</span>
      <span className="checkmark"></span>
    </label>
  )
}