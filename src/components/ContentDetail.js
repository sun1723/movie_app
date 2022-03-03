import "../utils/content_detail.scss";

export const ContentDetail = ({
  title = null,
  content,
  active = false,
  noTitle = false,
}) => {
  return (
    <>
      {content && content != "N/A" && (
        <div className="content">
          {!noTitle && <span className="content_title">{title}: </span>}
          <span> {content}</span>
        </div>
      )}
      {active && content == "N/A" && (
        <div className="content_contentNotAvailable">
          Plot is not Available Now
        </div>
      )}
    </>
  );
};
