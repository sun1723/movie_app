
export const FilterItem = ({title, content}) => {

  return (
    <div className="filter-item">
      <span>{title}</span>
      {content}
    </div>
  );
}