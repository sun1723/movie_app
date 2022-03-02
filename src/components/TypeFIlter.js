import '../utils/type_filter.scss';

export const TypeFilter = ({title, isSelected, handleOnChangeType}) => {
  return(
    <div className={isSelected ? 'type active' : 'type'} onClick={evt =>{handleOnChangeType(title)}}>
      {title}
    </div>
  )
}