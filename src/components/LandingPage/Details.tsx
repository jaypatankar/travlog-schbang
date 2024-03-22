import { DiscountIcon, StadiumSvg } from "@/assets/svg/SvgIcons";
import Image from "../../../node_modules/next/image";

const DealsSection = () => {
  return (
    <div id="deals" className="w-screen flex items-center justify-start relative left-0 mt-20">
      <div className="w-screen hidden md:flex absolute bottom-4">
        <StadiumSvg />
      </div>
      {/* <div className="absolute z-10 left-0 bottom-3 w-[500px] h-[550px] bg-[#FACD49]" />
      <div className="absolute z-10 bottom-3 left-[15%] h-[550px] w-[550px] bg-[#FACD49] rounded-full" />
      <div className="absolute left-2 bottom-0 flex items-center justify-center">
        <div className="w-1/2 h-2/3 bg-[#FACD49] rounded-full"></div>
      </div> */}
      <img
        className="absolute hidden md:flex z-30 bottom-0 left-[15%]"
        src="/girl-on-bag.png"
      />
      <div className="w-full justify-around flex flex-col-reverse md:flex-row-reverse gap-[42px]">
        <div className="w-full md:w-[445px] flex flex-col items-center md:items-start gap-[34px]">
          <div className="flex flex-col items-center md:items-start gap-[16px] text-center md:text-start px-3 md:px-0">
            <p className="uppercase text-travlog-pink text-[23px] font-bold tracking-[5px]">
              Travel Point
            </p>
            <p className="text-travlog-dark text-[44px] font-bold leading-[52.8px]">
              We helping you find your dream location
            </p>
          </div>
          <p className="text-secondary-50 text-[18px] px-3 md:px-0 text-center md:text-start">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {countData.map((data, index) => (
              <CountCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="w-1/2 hidden md:flex relative z-20">
          <div className="absolute z-10 top-36 left-[100px] w-[40px] h-[40px] bg-gradient-to-br from-purple-700 to-pink-500 rounded-full blur-sm" />
          <div className="absolute right-0 top-48 bg-white px-2 py-1 flex flex-row gap-2 rounded-full">
            <DiscountIcon />
            <p className="font-bold text-[23px] text-travlog-dark">Discounted Price</p>
          </div>
          <div className="absolute z-10 top-10 right-20 w-[96px] h-[96px] bg-gradient-to-br from-purple-700 to-pink-500 rounded-full blur-sm" />
        </div>
      </div>
    </div>
  );
};

const countData = [
  {
    count: "500+",
    title: "Holiday Package",
  },
  {
    count: "100",
    title: "Luxury Hotel",
  },
  {
    count: "7",
    title: "Premium Airlines",
  },
  {
    count: "2k+",
    title: "Happy Customer",
  },
];

export default DealsSection;

interface ICountCard {
  count: string;
  title: string;
}

const CountCard = ({ data }: { data: ICountCard }) => {
  return (
    <div className="rounded-[32px] border border-secondary-100/10 h-[151px] w-[206.5px] gap-[16px] flex flex-col justify-center items-center">
      <p className="font-bold text-travlog-orange text-[35px] leading-[42px]">
        {data.count}
      </p>
      <p className="text-[18px] leading-[28.8px] text-travlog-dark">
        {data.title}
      </p>
    </div>
  );
};
