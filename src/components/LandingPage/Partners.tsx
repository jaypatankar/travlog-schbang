import { AirbnbLogo, BookingcomLogo, ExpediaLogo, OrbitzLogo, TripadvisorLogo } from "@/assets/svg/PartnerLogos";

const Partners = () => {
  return (
    <div className="md:h-[160px] bg-white w-screen flex flex-row items-center justify-center relative my-20">
        <img
        src="/Objects.png"
        alt="Background Image"
        className="h-40 left-0 z-10 hidden md:flex"
      />
      <div className="hidden md:flex justify-between w-11/12 py-4 px-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-secondary-50 flex-shrink-0 w-1/5 flex items-center justify-center"
            >
              <div>{partner.logo}</div>
            </div>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-1 overflow-x-scroll py-4 px-2 gap-5">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 mr-4 flex items-center justify-center">
              <div className="text-secondary-50">{partner.logo}</div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Partners;

const partners = [
  {
    name: "tripadvisor",
    logo: <TripadvisorLogo />
  },
  {
    name: "expedia",
    logo: <ExpediaLogo/>
  },
  {
    name: "booking.com",
    logo: <BookingcomLogo />
  },
  {
    name: "airbnb",
    logo: <AirbnbLogo />
  },
  {
    name: "orbitz",
    logo: <OrbitzLogo />
  },
]