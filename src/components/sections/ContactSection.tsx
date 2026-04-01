import ContactForm from "@/components/form/ContactForm";
import { GrLocationPin } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiInfoBold } from "react-icons/pi";

const ContactSection = () => {
  return (
    <section className="my-12 w-full bg-[#F6F7F2] px-4 py-12 md:my-24">
      <div className="flex flex-col justify-center max-w-6xl gap-12 mx-auto md:flex-row md:justify-between md:gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium md:text-4xl">
            Vill du bli medlem?
          </h2>
          <p className="text-base whitespace-pre-line md:text-lg">
            {`Vad kul! Fyll i formuläret så återkommer vi så snart vi kan.\nDet går också bra att ringa, smsa eller maila.`}
          </p>
          <div className="space-y-4">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Vindelgatan+25C,+504+65+Bor%C3%A5s/@57.7223841,12.9084363,17z/data=!3m1!4b1!4m6!3m5!1s0x465aa75ae2fdef99:0xf54bf212959eeab1!8m2!3d57.7223813!4d12.9110112!16s%2Fg%2F11c5l34jbs?entry=ttu"
              className="block w-fit hover:underline hover:underline-offset-4"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">
                  <GrLocationPin />
                </div>
                <div className="text-lg font-regular">
                  Vindelgatan 25C, 504 65 Borås
                </div>
              </div>
            </a>
            <a
              href="tel:+46709405641"
              className="block w-fit hover:underline hover:underline-offset-4"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">
                  <IoPhonePortraitOutline />
                </div>
                <div className="text-lg font-regular">070-940 56 41</div>
              </div>
            </a>
            <a
              href="mailto:info@karlalfredgym.se"
              className="block w-fit hover:underline hover:underline-offset-4"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">
                  <MdOutlineMailOutline />
                </div>
                <div className="text-lg font-regular">
                  info@karlalfredgym.se
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex w-full max-w-[33.125rem] flex-col gap-6">
          <h2 className="text-2xl font-medium md:text-4xl">
            Kom i kontakt med oss
          </h2>
          <div className="flex items-start gap-2 p-2 text-sm border rounded border-amber-300 bg-amber-50 text-amber-800 md:px-4 md:py-3">
            <PiInfoBold className="mt-0.5 shrink-0 text-base" />
            <p>
              För tillfället har vi uppnått max antal medlemmar, och därmed ber
              vi er att återkomma vid ett senare tillfälle
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
