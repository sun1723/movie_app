import { SearchBox } from './SearchBox';
import '../utils/nav.scss'
import SearchIcon from '@material-ui/icons/Search';
import { TypesList } from './TypesList';


export const Nav = ({handleOnSearchClick, types}) => {

  return (
    <div className='nav-bar'>
      <div className="nav-bar_search">
        <SearchBox onSearch={handleOnSearchClick} iconAfter={<SearchIcon/>}/>
      </div>
      <div className='nav-bar_type'>
        <TypesList types={types}/>
      </div>
    </div>
  )
}