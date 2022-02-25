import { TypeRadio } from './TypeRadio';

export const TypesList = ({types}) => {
  return (
    <>
      {types.map( type => (
        <TypeRadio title={type}/>
      ))}
    </>
  )
}