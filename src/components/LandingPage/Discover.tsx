import { useState, useEffect } from "react";

// Interface for service data
interface IService {
  icon: string;
  title: string;
  description: string;
}

// Service slider component
const ServicesSlider = () => {
  // Sample service data
  const services: IService[] = [
    {
      icon: "./destination.png",
      title: "Best Tour Guide",
      description:
        "What looked like a small patch of purple grass, above five feet.",
    },
    {
      icon: "./booking.png",
      title: "Easy Booking",
      description: "Square, was moving across the sand in their direction.",
    },
    {
      icon: "./cloudy.png",
      title: "Weather Forecast",
      description:
        "What looked like a small patch of purple grass, above five feet.",
    },
  ];

  return (
    <div className="w-full md:w-3/5 flex flex-col md:flex-row items-center justify-start gap-[21px] overflow-x-auto overflow-y-visible p-6 rounded-3xl">
      {services.map((data) => (
        <ServiceCard key={data.title} {...data} />
      ))}
    </div>
  );
};

// Individual service card component
const ServiceCard = ({ icon, title, description }: IService) => {
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const response = await fetch(icon);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setIconUrl(blobUrl);
      } catch (error) {
        console.error("Error fetching icon:", error);
      }
    };

    fetchIcon();

    // Cleanup function to revoke object URL
    return () => {
      if (iconUrl) {
        URL.revokeObjectURL(iconUrl);
      }
    };
  }, [icon]);

  return (
    <div className="w-[350px] h-[443px] flex flex-col items-center justify-center shadow-lg rounded-3xl p-[64px] z-30 bg-white gap-[64px] md:mt-20">
      <div className="w-[64px] h-[64px]">
        {iconUrl && <img src={iconUrl} alt="Icon" />}
      </div>
      <div className="w-[222px] gap-[32px] flex items-center justify-center flex-col">
        <p className="font-bold text-[28px] leading-[33.6px] text-center">
          {title}
        </p>
        <p className="text-secondary-50 text-[18px] leading-[28.8px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

// Information section component
const InfoSection = () => {
  return (
    <div className="w-full md:w-2/5 flex flex-col items-center md:items-start gap-5 md:gap-10">
      <p className="text-travlog-pink font-medium text-[23px] tracking-widest">
        SERVICES
      </p>
      <p className="font-bold text-[26px] md:text-[44px] text-travlog-dark text-center md:text-start">
        Our top value categories for you
      </p>
    </div>
  );
};

// Main services section component
const DiscoverSection = () => {
  return (
    <div id="discover" className="w-screen flex flex-col items-center justify-center text-travlog-dark py-18 px-3 md:px-0">
      <div className="z-20">
        <div
          style={{ maxWidth: "1199px" }}
          className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 overflow-visible"
        >
          <InfoSection />
          <ServicesSlider />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
