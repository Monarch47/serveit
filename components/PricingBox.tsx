import React from "react";

type Props = {
  pricingValueCalculator: number;
};

const PricingBox = (props: Props) => {
  return (
    <div className="w-full sm:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-xl px-10 py-16 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="xl:text-5xl font-semibold">Storage</h1>
          <h4 className="text-black/30 font-medium">
            {props.pricingValueCalculator}
          </h4>
        </div>
        <div>
          <h1>price</h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="xl:text-5xl font-semibold">Traffic</h1>
          <h4 className="text-black/30 font-medium">
            {props.pricingValueCalculator}
          </h4>
        </div>
        <div>
          <h1>price</h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="xl:text-5xl font-semibold">Bandwidth</h1>
          <h4 className="text-black/30 font-medium">
            {props.pricingValueCalculator}
          </h4>
        </div>
        <div>
          <h1>price</h1>
        </div>
      </div>
      <div className="h-1 w-full bg-black/30"></div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="xl:text-5xl font-semibold">Total</h1>
        </div>
        <div>
          <h1>price</h1>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
