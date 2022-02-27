import '../utils/input_pagination.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const InputPagination = ({currentPage, totalResultNum, handleChangePage, movieCount}) => {
  const totalPage = Math.floor(totalResultNum / 10) + 1;
  const backPage = currentPage - 1;
  const forwardPage =  currentPage + 1;
  const start = (currentPage - 1) * 10 + 1;
  const end = currentPage * 10;
  
  return (
    <div className="input-pagination">
      <span className='text'>
        {start} - {end} Results
      </span>
      <span className='icon'>
        <ArrowBackIosIcon 
          fontSize="small" 
          color={currentPage == 1 ? 'disabled' : ''}
          onClick={(evt) => {if(currentPage ==  1) return; handleChangePage(backPage)}}
        />
      </span>
      <input 
        placeholder={currentPage}
        value={currentPage}
        onChange={(evt)=> {
          if( evt.currentTarget.value > totalPage)
            return;
          handleChangePage(evt.currentTarget.value)
        }}/>
        <span className='text'> / {totalPage}</span>
        <span className='icon'>
          <ArrowForwardIosIcon 
            fontSize="small" 
            color={currentPage ==  totalPage ? 'disabled' : ''} 
            onClick={(evt) => {if(currentPage ==  totalPage) return; handleChangePage(forwardPage)}}
          />
        </span>
    </div>
  )
}