import { TypeFilter } from "./TypeFIlter"
import { types } from "../utils/app_constant"
import '../utils/typeFilter_list.scss';

export const TypeFilterList = ({selectedType, handleOnChangeType }) => {

  return(
    <div className="type-list">
      { types.map(type =>(
        <TypeFilter title={type} 
          isSelected={selectedType == type}
          handleOnChangeType = {handleOnChangeType}/>
      ))
      }
    </div>
  )
}