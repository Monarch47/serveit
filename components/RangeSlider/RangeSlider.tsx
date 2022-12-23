import React, { useState } from "react";
import RangeSliderInput from "./RangeSliderInput";
import { pricingData } from "../../utility/data";

type Props = {
  setPricingValueCalculator: React.Dispatch<React.SetStateAction<number>>;
};

const RangeSlider = (props: Props) => {
  const [pricingValue, setPricingValue] = useState(0);
  props.setPricingValueCalculator(pricingValue);
  const renderPricingData = pricingData.map((data, index) => {
    return (
      <div className="flex flex-col gap-8" key={index}>
        <div className="flex flex-col gap-2">
          <h1 className="xl:text-5xl font-semibold">{data.title}</h1>
          <h4 className="text-black/30 xl:text-xl">{data.description}</h4>
        </div>
        <RangeSliderInput
          maxValue={data.maxValue}
          sliderStep={data.sliderStep}
          subText={data.subText}
          setPricingValue={setPricingValue}
        />
      </div>
    );
  });
  return (
    <div className="w-full sm:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-xl px-10 py-16 flex flex-col gap-10">
      {renderPricingData}
    </div>
  );
};

export default RangeSlider;
