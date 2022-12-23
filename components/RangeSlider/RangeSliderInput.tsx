import React, { useState } from "react";

type Props = {
  maxValue: number;
  sliderStep: number;
  subText: string;
  setPricingValue: React.Dispatch<React.SetStateAction<number>>;
};

const RangeSliderInput = (props: Props) => {
  const [sliderValue, setSliderValue] = useState("0");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(e.target.value);
    props.setPricingValue(Number(e.target.value));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col w-full xl:text-lg relative">
        <input
          type="range"
          min={0}
          max={props.maxValue}
          step={props.sliderStep}
          value={sliderValue}
          onChange={handleChange}
        />
        <div className={`w-${sliderValue} h-ful absolute`}></div>
      </div>
      <div className="flex justify-between items-center text-black/30 font-semibold">
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            value={0}
            readOnly={true}
            className="w-3 xl:w-10 text-center focus:outline-none xl:py-1 rounded-lg"
          />
          <h1>{props.subText}</h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            onChange={handleChange}
            readOnly={true}
            value={props.maxValue}
            className="w-3 xl:w-10 text-center focus:outline-none xl:py-1 rounded-lg"
          />
          <h1>{props.subText}</h1>
        </div>
      </div>
    </div>
  );
};

export default RangeSliderInput;
