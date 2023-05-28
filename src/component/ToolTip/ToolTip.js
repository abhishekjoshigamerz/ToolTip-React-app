import React, { useState } from 'react';
import './ToolTip.css';

const Tooltip = ({ children, tip }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="TooltipWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && <div className="Tooltip">{tip}</div>}
    </div>
  );
};

export default Tooltip;
