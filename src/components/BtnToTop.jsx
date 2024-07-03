import { useState } from "react";

function BtnToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {showButton && (
        <div className="btn-to-top" onClick={handleClick}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default BtnToTop;
