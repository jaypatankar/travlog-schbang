import {
  FacebookIcon,
  InstagramIcon,
  TravlogIcon,
  TwitterIcon,
} from "@/assets/svg/SvgIcons";
import Link from "../../../node_modules/next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      {
        text: "About",
        link: "#",
      },
      {
        text: "Career",
        link: "#",
      },
      {
        text: "Mobile",
        link: "#",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        text: "Why Travlog?",
        link: "#",
      },
      {
        text: "Partner with us",
        link: "#",
      },
      {
        text: "FAQ's",
        link: "#",
      },
      {
        text: "Blog",
        link: "#",
      },
    ],
  },
  {
    title: "Meet Us",
    links: [
      {
        text: "+00 92 1234 56789",
        link: "tel:+00 92 1234 56789",
      },
      {
        text: "info@travlog.com",
        link: "mailto:info@travlog.com",
      },
      {
        text: "205. R Street, New York \n BD23200",
        link: "#",
      },
      {
        text: "Blog",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-screen flex justify-center text-travlog-dark py-20"
    >
      <div className="md:w-[1199px] md:h-[400px] flex flex-col-reverse gap-10 md:flex-row items-start justify-between">
        <div className="flex h-full flex-col justify-between w-[281px]">
          <div className="flex flex-col gap-5">
            <TravlogIcon />
            <p className="font-black text-[23px] text-secondary-50 leading-[36.8px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              <br /> It has roots in a piece of classical Latin literature from
              45 BC.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start w-full gap-8">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[121px]">
          {footerLinks.map((data, index) => (
            <div
              key={index}
              className="flex flex-col justify-start gap-[15px] md:gap-[32px]"
            >
              <p className="text-secondary-100 font-bold text-[23px]">
                {data.title}
              </p>
              {data.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.link}
                  className="text-secondary-75 text-[18px]"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
