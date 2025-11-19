import React from "react";
import ExploreSlider from "./ExploreSlider";

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 ">
      <div className="max-w-3xl mx-auto gap-6 flex flex-col">
        <h3 className="text-2xl font-bold">National Freight Data Hub</h3>
        <p className="font-light text-lg">
          Capturing, improving, standardising and sharing freight data to
          improve the efficiency, safety, productivity and resilience of the
          freight sector.
        </p>
      </div>
      <ExploreSlider />
    </div>
  );
};

export default Explore;
