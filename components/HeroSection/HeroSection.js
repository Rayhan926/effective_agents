import React from "react";
import Radio from "../Radio";
const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/img/hero_bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container text-center">
        <div className="min-h-screen lg:min-h-[auto] lg:h-[670px] flex flex-col justify-center items-center">
          <h1 className="text-white text-[30px] capitalize leading-[33px] lg:text-[54px] lg:leading-[70px] tracking-[1px] font-bold max-w-[680px] mx-auto">
            Did you receive an invitation code?
          </h1>
          <div className="flex items-center justify-center mt-8 mb-[60px] gap-10">
            <Radio label={"Yes"} name="has_invitation_code" defaultChecked />
            <Radio label={"No"} name="has_invitation_code" />
          </div>
          <button className="__button">begin application</button>

          <img
            src="/img/play_circle.png"
            alt="play_circle"
            className="mt-[140px] lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
