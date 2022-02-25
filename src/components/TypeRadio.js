
export const TypeRadio = ({title}) => {

  return (
    <label class="radio-container">{title}
      <input type="radio" name="radio"/>
      <span class="checkmark"></span>
    </label>
  )
}