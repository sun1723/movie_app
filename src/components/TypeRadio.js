import '../utils/type_radio.scss'

export const TypeRadio = ({title}) => {

  return (
    <label className="radio-container" id="radio_con">
      <input type="radio" name="radio" id="radio_icon"/>
      <span id="radio_title">{title}</span>
      <span className="checkmark"></span>
    </label>
  )
}