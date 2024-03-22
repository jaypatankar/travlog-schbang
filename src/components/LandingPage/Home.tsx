import { AddContactIcon, BagIcon, PaperPlaneIcon, PlayIcon } from "@/assets/svg/SvgIcons";
import Image from "../../../node_modules/next/image";

const HomePage = () => {
  return (
    <div id="home" className="w-screen flex flex-col items-center justify-center text-travlog-dark overflow-x-hidden">
      <div className="z-20">
        <div
          style={{ maxWidth: "1199px" }}
          className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 mt-20"
        >
          <HeroContent />
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const ImageGallery = () => {
  return (
    <div className="w-full md:w-3/5 relative px-5 md:px-12">
      <div className="flex z-30 shadow-md absolute right-32 bottom-0 rounded-full bg-travlog-orange p-3">
        <AddContactIcon className="w-10 h-10" />
      </div>
      <div className="flex z-30 shadow-md absolute left-5 top-64 rounded-full bg-travlog-pink p-4">
        <PaperPlaneIcon className="w-8 h-8" />
      </div>
      <img
        src="/home-layer.png"
        alt="Background Image"
        className="absolute object-cover inset-0 z-10 w-full"
      />
      <div className="z-20 relative h-fit">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col justify-between items-center md:items-start gap-6">
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/5a13/0b8c/5a19ae1c37701566505c0587e03528d7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JrnSHA80-r~-T3filB1uzuJZnQxF~-vcsZWS5Il859OteAtJeLj6ZfQuHXoJu3ONe1-wJKO84l1JNlPsbc-aD-QD9NTDdj-gGpcu5qqwIw8SvZ01ScSarhtjb6~gSRPV3M7DB2WH08i6wkujK3ZyBLZ7bQb6--dtlj9iNRaQRl9tKnkxftZCkew1YIEyR2C~HYovMo~Vn3EdL2Onb39bC0bTd56KJ8myF7ZVWiXh1z7JVusz11yKs3CGG5FYVh7KmEf0FvzvNzgd1FPFtMJpMHx246cuKmWU70FM5VfmpEWYFDFroQGgqoQ9F~mGHDEX4vDijgA-LDWNFF4-DctIrw__"
              }
              style={{ width: "272px", height: "300px" }}
              alt="Image 1"
              className="rounded-2xl object-center object-cover"
            />

            <img
              src={
                "https://s3-alpha-sig.figma.com/img/204b/a98b/1c4cf65c4807665ca72c447f59da622f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiPn4tqxbH2cSsKmkXOOJmiTMKZ8QGMhaj9ETwAwSY0JVUNnkpzS3K~BWGgSLLdPRPzjf7y2DPCJMr2QHKu7TEwRVGP3mGSBdhErphPYrCbUCZF30udCV17CCFSuLJGpabUqxj43xt~DiMgRP4ihXQrZK1n4cLlv2qEsAr0EZw6bXYJmKV~ran6Rh5B7rEP5tPtjv3RiUpdt-jGaKxEooEgZ2CgQF5NrRwWz3XaQyu6-diy48WDZJGM-qTYCSW1uxpOfGWZQluW1tSARA~IZyMWu0JVmtuOfotHFhrusI-WTsxHAOcjsOvJ42EhgvH8bdauEvuQeXxi6j6uXeLJCdw__"
              }
              style={{ width: "272px", height: "300px" }}
              alt="Image 1"
              className="rounded-2xl object-center object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={
                "https://s3-alpha-sig.figma.com/img/f9b8/9b9b/dd0de72a24eb00dbce587d2a7a5767a1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE6l6l-bMBalryodWkqovtAQ8mq2gHEL5m~evQdu0eOlgpGMLdNe--Hw8FqAFpbILn6ma2KNstWAbpCfDoZzbidGZ-YJralRGAjtuNGi-qgsgoTnNtB~77uFaUZ~Zj3MtHZuhoZd3dNZGu7n7Fp976lwt5bfZingaYUW~OJHibLtbVUpz7Ib1hrzI3cWjOvNJNKtsaVpyNi7bjsR6NwrxefT4IIBp5Aska8uASGVIMRcOmqcAV-HNCUkqXCvBs4-lW-W82LuLdMZoQc~8M5ypFTY685m3JZTsCSQH8ucpS4SfAeK3TJTF48rW6-Bn6zrmfllqkmMXdu~6VbMgr8RZw__"
              }
              style={{ width: "272px", height: "400px" }}
              alt="Image 1"
              className="rounded-2xl object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="w-full md:w-2/5 flex flex-col items-start gap-10 px-5 md:px-12 text-center md:text-start">
      <button className="hidden md:flex cursor-pointer text-travlog-pink bg-white hover:bg-travlog-pink transition-all ease-in-out hover:text-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 gap-2 flex-row items-center">
        Explore the world <BagIcon className="w-4 h-4" />
      </button>
      <p className="font-bold text-2xl md:text-7xl text-travlog-dark">
        Travel <span className="text-travlog-pink">top destination</span> of the
        world
      </p>
      <p>
        We always make our customer happy by providing as many choices as
        possible
      </p>
      <div className="flex flex-col items-start md:flex-row md:items-center gap-3">
        <button className="cursor-pointer text-travlog-pink bg-white hover:bg-travlog-pink transition-all ease-in-out hover:text-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 gap-2 flex flex-row items-center">
          Get Started
        </button>
        <button
          style={{ border: "1px solid #EEEEEE" }}
          className="cursor-pointer text-travlog-dark font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 flex flex-row gap-2 "
        >
          <PlayIcon />
          Sign up
        </button>
        <button className="md:hidden cursor-pointer text-travlog-pink bg-white hover:bg-travlog-pink transition-all ease-in-out hover:text-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 gap-2 flex flex-row items-center">
          Explore the world <BagIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export const BackgroundOverlay = () => {
  return (
    <div className="w-full overflow-x-clip relative top-0 left-0">
      <div
        style={{
          width: "500px",
          height: "500px",
          position: "absolute",
          top: "-223px",
          left: "-356px",
          background: "#FF5722",
          filter: "blur(100px)",
        }}
        className="gap-0 opacity-20 rounded-full z-10"
      />
      <div
        style={{
          width: "500px",
          height: "500px",
          position: "absolute",
          top: "847px",
          right: "-300px",
          background: "#FACD49",
          filter: "blur(100px)",
        }}
        className="gap-0 opacity-20 rounded-full z-10"
      />
       <div
        style={{
          width: "200px",
          height: "220px",
          position: "absolute",
          top: "2525.46px",
          right: "0",
        }}
        className="md:z-10"
      >
        <Image width={332} height={351} src="/curvy-lines.png" alt="sprial png" />
      </div>
    </div>
  );
};
