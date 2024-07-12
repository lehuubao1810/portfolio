export const DisplayPDF = ({ pdf, setIsShowCV }) => {
  return (
    <div
      className="pdfPreview"
      onClick={() => {
        setIsShowCV(false);
      }}
    >
      {/* <div> */}
      <embed
        src={pdf}
        type="application/pdf"
        className="pdfPreview_content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      {/* </div> */}
    </div>
  );
};
