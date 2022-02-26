import { useEffect } from 'react';
import '../utils/drop_down.scss';

export const DropDown = ({open,content}) => {

  return (
    <>
      {open && 
        <div className="drop-down" id="drop">
          {content}
        </div>
      }
    </>
  )
}