import { SearchBox } from './SearchBox';
import '../utils/nav.scss'
import SearchIcon from '@material-ui/icons/Search';
import { TypesList } from './TypesList';
import { YearSlider } from './YearSlider';

export const Nav = ({handleOnChangeType, handleOnSearchClick, selectedYear, handleChangeYear, selectedType, types, collapMode, handleOnOpen, handleOnClose, dropDownEnable}) => {

  return (
    <div className='nav-bar'>
      <div className="nav-bar_search">
        <SearchBox onSearch={handleOnSearchClick} iconAfter={<SearchIcon/>}/>
      </div>
      <div className='nav-bar_year'>
        {/* <YearSlider 
          selectedYear={selectedYear} 
          collapMode={collapMode}  
          handleChangeYear={handleChangeYear}/> */}
      </div>
      <div className='nav-bar_type'>
        {/* <TypesList 
          types={types} 
          selectedType={selectedType}
          collapMode={collapMode} 
          handleOnOpen={handleOnOpen} 
          handleOnClose={handleOnClose}
          dropDownEnable={dropDownEnable}
          handleOnChangeType={handleOnChangeType}/> */}
      </div>
    </div>
  )
}