import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import PricingBox from "../components/PricingBox";
import RangeSlider from "../components/RangeSlider/RangeSlider";

const Home: NextPage = () => {
  const [pricingValueCalculator, setPricingValueCalculator] = useState(0);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-2 gap-20">
      <div className="w-full relative m-auto">
        <h1 className="text-7xl text-primary-blue">Pay As You Go</h1>
      </div>
      <div className="flex flex-col md:flex md:flex-row w-full justify-center items-center gap-20">
        <RangeSlider setPricingValueCalculator={setPricingValueCalculator} />
        <PricingBox pricingValueCalculator={pricingValueCalculator} />
      </div>
    </div>
  );
};

export default Home;
