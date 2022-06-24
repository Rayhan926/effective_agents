import React from "react";
import StepTitle from "./components/StepTitle/StepTitle";
import { useForm } from "react-hook-form";
import Select from "../Select/Select";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section
      style={{
        backgroundImage: 'url("/img/gradient_bg.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container max-w-[852px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1 --Start-- */}
          <StepTitle step={1} title="Brokerage Information" />
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className="__input"
                placeholder="first name*"
                {...register("firstName")}
              />
              <input
                type="text"
                className="__input"
                placeholder="last name*"
                {...register("lastName")}
              />
            </div>

            <input
              type="email"
              className="__input"
              placeholder="email*"
              {...register("email")}
            />

            <div className="grid grid-cols-2 gap-5">
              <input
                type="password"
                className="__input"
                placeholder="password*"
                {...register("password")}
              />
              <input
                type="text"
                className="__input"
                placeholder="Phone*"
                {...register("phone")}
              />
            </div>

            <input
              type="text"
              className="__input"
              placeholder="office address*"
              {...register("officeAddress")}
            />

            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className="__input"
                placeholder="zip code*"
                {...register("zipCode")}
              />
              <input
                type="text"
                className="__input"
                placeholder="office phone"
                {...register("officePhone")}
              />
            </div>

            <input
              type="text"
              className="__input"
              placeholder="enter Zillow Profile URL"
              {...register("zillowProfile")}
            />
          </div>
          {/* Step 1 --End-- */}

          {/* Step 2 --Start-- */}
          <div className="mt-20">
            <StepTitle step={2} title="Brokerage Information" />
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className="__input"
                placeholder="brokerage company"
                {...register("brokerageCompany")}
              />
              <input
                type="text"
                className="__input"
                placeholder="BROKER OF RECORD"
                {...register("brokerOfRecord")}
              />
            </div>
          </div>
          {/* Step 2 --End-- */}

          {/* Step 3 --Start-- */}
          <div className="mt-20">
            <StepTitle
              step={3}
              title="What states are you licensed in?*"
              subtitle="*2 max"
            />

            <div className="max-w-[535px] space-y-8">
              <Select {...register("state1")} required>
                <option value="" disabled selected>
                  select a state
                </option>
                <option value="1">State 1</option>
                <option value="2">State 2</option>
              </Select>
              <Select {...register("state2")} required>
                <option value="" disabled selected>
                  select a state
                </option>
                <option value="1">State 1</option>
                <option value="2">State 2</option>
              </Select>
            </div>
          </div>
          {/* Step 3 --End-- */}

          {/* Step 4 --Start-- */}
          <div className="mt-20">
            <StepTitle step={4} title="Agent Information" />
            <div className="space-y-6">
              <div>
                <label
                  className="text-[#545454] text-xl mb-5 inline-block"
                  htmlFor="year"
                >
                  What year did you become a licensed Realtor®?
                </label>
                <Select
                  id="year"
                  className="max-w-[257px]"
                  {...register("year")}
                  required
                >
                  <option value="" disabled selected>
                    select a year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </Select>
              </div>
              <input
                type="text"
                className="__input"
                placeholder="“Average” ADOM Previous 12 months For SOLD Homes"
                {...register("averageADOMPrevious12Months")}
              />
            </div>
          </div>
          {/* Step 4 --End-- */}

          {/* Submit --Start-- */}
          <button className="__button mt-[64px]">apply now</button>
          {/* Submit --End-- */}
        </form>
      </div>
    </section>
  );
};

export default Form;
