import React from "react";

const StepTitle = ({ step, title, subtitle }) => {
  return (
    <div className="space-y-3.5 mb-[64px] text-center lg:text-left">
      <p className="step_text">step {step}</p>
      <h2 className="title_md">{title}</h2>
      {subtitle && (
        <p className="text-base lg:text-lg text-dark-gray -translate-y-1.5">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StepTitle;
