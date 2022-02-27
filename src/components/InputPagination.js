import '../utils/input_pagination.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const InputPagination = ({currentPage, totalResultNum, handleChangePage}) => {
  const totalPage = Math.floor(totalResultNum / 10) + 1;
  const backPage = currentPage - 1;
  const forwardPage =  currentPage + 1;
  const start = (currentPage - 1) * 10 + 1;
  const end = currentPage * 10 < totalResultNum ? currentPage * 10 : totalResultNum ;
  
  return (
    <div className="input-pagination">
      <span className='text'>
        {start} - {end} Results
      </span>
      <span className='icon'>
        <ArrowBackIosIcon 
          style={{color: currentPage == 1 ? 'rgba(255,255,255,0.4)' : '#fff'}}
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
        }} />
        <span className='text'> / {totalPage}</span>
        <span className='icon'>
          <ArrowForwardIosIcon 
            style={{color: currentPage == totalPage ? 'rgba(255,255,255,0.4)' : '#fff'}}
            onClick={(evt) => {if(currentPage ==  totalPage) return; handleChangePage(forwardPage)}}
          />
        </span>
    </div>
  )
}