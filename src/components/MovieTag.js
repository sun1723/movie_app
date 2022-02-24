import '../utils/movie_tag.scss';

export const MovieTag = ({content,isSeperate }) => {

  return (
    <div className='movie-tag'>
    {!content || content == "N/A" ? 
      null
      :
      content.split(',').length > 1 ?
      <div className='movie-tag_multiple'>
        {content.split(',').map (item => {
          return (
            <span>{item}</span>)
        })}
        </div>
        : 
        (
          <div className="movie-tag_single">
            <span>{content}</span>
          </div>
        )
    }
    </div>
  )
}