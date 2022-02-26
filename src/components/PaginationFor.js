import Pagination from '@material-ui/lab/Pagination';
import '../utils/pagination.scss'

export const PaginationFor = ({count, handleChangePage}) => {

  return (
    <div className='pagination'>
      <Pagination 
        count={count} 
        color="primary"
        onChange={(evt, page) => {console.log(page); handleChangePage(page)}}/>
    </div>
  )
}