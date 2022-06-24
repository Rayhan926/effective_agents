import React from "react";
import { BsCheck } from "react-icons/bs";

const Radio = ({ label, ...props }) => {
  return (
    <label className="inline-flex items-center gap-4 cursor-pointer select-none">
      <div className="shrink-0 relative">
        <input {...props} type="radio" className="sr-only peer" />
        <div className="w-6 h-6 rounded border-2 border-soft-gray bg-white peer-checked:border-primary peer-checked:bg-primary"></div>
        <div className="absolute top-0 left-0 w-full h-full justify-center items-center text-white hidden peer-checked:flex pointer-events-none">
          <BsCheck size={22} />
        </div>
      </div>
      {label && (
        <p className="text-[20px] font-semibold text-white text-dark">
          {label}
        </p>
      )}
    </label>
  );
};

export default Radio;
