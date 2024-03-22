import { EmailIcon } from "@/assets/svg/SvgIcons";
import { useState } from "react";
import Image from "../../../node_modules/next/image";

const EMAIL_REGEX = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

const SubscribeCard = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleEmailChange = (value: string) => {
    setUserEmail(value);
    const isValid = EMAIL_REGEX.test(value);
    if (isValid) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  return (
    <div id="contact" className="w-screen flex justify-center text-travlog-dark py-20">
      <div className="md:w-[1199px] py-16 md:py-0 md:h-[608px] flex items-center justify-center bg-[#FACD4914] relative">
      <div
        className="z-40 -left-10 -top-10 absolute"
      >
        <Image
          width={183.86}
          height={176.35}
          src="/Graphic_Elements.png"
          alt="sprial png"
        />
      </div>
        <div className="md:w-[982px] flex flex-col items-center justify-center gap-[64px]">
          <div className="flex flex-col items-center">
            <p className="uppercase text-travlog-pink text-[23px] font-bold tracking-[5px] text-center">
              subscribe to our newsletter
            </p>
            <p className="text-[55px] leading-[66px] text-center font-bold">
              Prepare yourself &#38; let&apos;s explore the beauty of the world
            </p>
          </div>
          <div className="flex  flex-col md:flex-row gap-[64px]">
            {isSubscribed ? (
              <div className="w-full text-travlog-pink text-xl gap-2">
                Thanks for subscribing 🎉 <br />
                {userEmail}
              </div>
            ) : (
              <>
                <StyledInput
                  userEmail={userEmail}
                  setUserEmail={handleEmailChange}
                />
                <button
                  disabled={!userEmail || !validEmail}
                  className={`text-white bg-travlog-purple hover:bg-purple-800 rounded-2xl text-sm px-4 lg:px-5 py-5 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-travloc-purple dark:hover:bg-travlog-purple/90 focus:outline-none dark:focus:ring-purple-800 mx-2 drop-shadow-lg md:h-[96px] flex items-center font-bold ${
                    !userEmail || !validEmail
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={() => setIsSubscribed(true)}
                >
                  Subscribe
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledInput = ({
  userEmail,
  setUserEmail,
}: {
  userEmail: string;
  setUserEmail: (val: string) => void;
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative w-full md:w-[685px] h-[60px] md:h-[96px]">
      <input
        onFocusCapture={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        className="w-full h-full px-8 py-4 rounded-[32px] focus:outline-none focus:border-travlog-pink text-secondary-100 text-[23px]"
        type="text"
        placeholder=""
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <div
        className={`absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none ${
          isActive || userEmail.length > 0 ? "hidden" : "inline"
        }`}
      >
        <EmailIcon />
        <span className="ml-2 text-secondary-75 text-[23px]">Your Email</span>
      </div>
    </div>
  );
};

export default SubscribeCard;
