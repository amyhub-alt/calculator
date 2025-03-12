import React, { useEffect, useRef, useState } from 'react';

const Display = ({ value, isResultDisplayed }) => {
  const displayRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (displayRef.current) {
      const displayWidth = displayRef.current.clientWidth; // Width of the display box
      const textWidth = displayRef.current.scrollWidth; // Width of the text inside

      setIsOverflowing(textWidth > displayWidth); // Check if text is overflowing

      if (isResultDisplayed && textWidth > displayWidth) {
        // If the result is too long, show the beginning (clip right side)
        displayRef.current.scrollLeft = 0;
      } else {
        // Otherwise, keep scrolling behavior for equation input
        displayRef.current.scrollLeft = displayRef.current.scrollWidth;
      }
    }
  }, [value, isResultDisplayed]); // Update when value changes

  return (
    <div 
      className={`display ${isResultDisplayed && isOverflowing ? 'result-long' : 'equation'}`} 
      ref={displayRef} 
      role="status"
    >
      {value}
    </div>
  );
};

export default Display;
