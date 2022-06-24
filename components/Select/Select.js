import React from "react";
import { FiChevronDown } from "react-icons/fi";
const Select = ({ children, className = "", ...props }) => {
  return (
    <div className={`relative ${className}`}>
      <select {...props} className={`__input __select pr-[65px]`}>
        {children}
      </select>

      <div className="absolute top-0 right-0 h-full pr-7 pointer-events-none flex items-center text-primary">
        <FiChevronDown size={28} />
      </div>
    </div>
  );
};

export default Select;
