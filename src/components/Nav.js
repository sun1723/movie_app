import {Navcss} from '../utils/styles'
import { SearchBox } from './SearchBox';

export const Nav = ({handleOnSearchClick}) => {

  return (
    <Navcss>
      <nav className="navbar">
        <SearchBox onSearch={handleOnSearchClick} />
      </nav>
    </Navcss>
  )
}