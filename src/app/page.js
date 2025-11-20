import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import InsightsSlider from "@/components/InsightsSlider";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="bg-[#F2F2F2]">
        <AboutUs />
      </div>
      <Explore />
      <div className="bg-[#F2F2F2]">
        <InsightsSlider />
      </div>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 items-center justify-center py-20">
        <h3 className="text-2xl font-bold">PARTNERS CONTRIBUTING WITH US</h3>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="w-[220px] h-20 border"></div>
          <div className="w-[220px] h-20 border"></div>
          <div className="w-[220px] h-20 border"></div>
          <div className="w-[220px] h-20 border"></div>
        </div>
      </div>
    </div>
  );
}
