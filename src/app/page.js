import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import InsightsSlider from "@/components/InsightsSlider";
import { MdSearch } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="relative pb-28">
        <Banner />
        <div className="shadow-lg absolute -translate-x-1/2 left-1/2 z-10 bottom-0 w-full max-w-6xl mx-auto bg-white px-20 py-14 ">
          <div className="w-9/12  mx-auto flex flex-col gap-8">
            <p className="text-lg tracking-wide font-medium">
              WHAT DATA ARE YOU LOOKING FOR ?
            </p>
            <div className="flex flex-row w-full">
              <input
                type="text"
                placeholder="Search for data..."
                className="w-full px-6  border border-blue-500 text-lg"
              />
              <button className="bg-white px-6 py-4 text-blue-500 border border-blue-500 flex items-center justify-center">
                <MdSearch size={28} />
              </button>
            </div>
          </div>
        </div>
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
