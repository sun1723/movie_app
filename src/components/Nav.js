import { SearchBox } from './SearchBox';
import '../utils/nav.scss'
import SearchIcon from '@material-ui/icons/Search';
import { TypesList } from './TypesList';


export const Nav = ({handleOnChangeType, handleOnSearchClick, selectedType, types, collapMode, handleOnOpen, handleOnClose, dropDownEnable}) => {

  return (
    <div className='nav-bar'>
      <div className="nav-bar_search">
        <SearchBox onSearch={handleOnSearchClick} iconAfter={<SearchIcon/>}/>
      </div>
      <div className='nav-bar_type'>
        <TypesList 
          types={types} 
          selectedType={selectedType}
          collapMode={collapMode} 
          handleOnOpen={handleOnOpen} 
          handleOnClose={handleOnClose}
          dropDownEnable={dropDownEnable}
          handleOnChangeType={handleOnChangeType}/>
      </div>
    </div>
  )
}